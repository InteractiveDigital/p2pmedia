/* eslint-disable no-unused-vars */
// src/components/CommentsSection.jsx
import React, { useState, useEffect } from 'react';
import { ThumbsUp, MessageCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const STORAGE_KEY = 'comments';
const BATCH_SIZE = 5;

export default function CommentsSection() {
    // top‐level comments array, each with .replies = []
    const [comments, setComments] = useState([]);
    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

    // reply form state
    const [replyingTo, setReplyingTo] = useState(null);     // comment.id we are replying to
    const [replyForm, setReplyForm] = useState({ name: '', text: '' });

    // main comment form
    const [form, setForm] = useState({ name: '', email: '', text: '' });

    // — Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setComments(JSON.parse(saved));
    }, []);

    // — Persist on change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    }, [comments]);

    // — Helpers
    const getInitials = (fullName) =>
        fullName
            .split(' ')
            .map((w) => w[0])
            .slice(0, 2)
            .join('')
            .toUpperCase();

    // — Handlers for main form
    const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, text } = form;
        if (!name || !email || !text) return;
        const newComment = {
            id: Date.now(),
            name: name.trim(),
            email: email.trim(),
            text: text.trim(),
            timestamp: new Date().toISOString(),
            likes: 0,
            replies: [],
        };
        setComments((c) => [...c, newComment]);
        setForm({ name: '', email: '', text: '' });
    };

    // — Like handler (works for comments or replies)
    const handleLike = (id, parentId = null) => {
        setComments((all) =>
            all.map((c) => {
                if (parentId == null && c.id === id) {
                    return { ...c, likes: c.likes + 1 };
                }
                if (c.id === parentId) {
                    // find the reply
                    const newReplies = c.replies.map((r) =>
                        r.id === id ? { ...r, likes: r.likes + 1 } : r
                    );
                    return { ...c, replies: newReplies };
                }
                return c;
            })
        );
    };

    // — Reply form open
    const openReply = (commentId) => {
        setReplyingTo(commentId);
        setReplyForm({ name: '', text: '' });
    };

    // — Reply form change
    const handleReplyChange = (e) =>
        setReplyForm((r) => ({ ...r, [e.target.name]: e.target.value }));

    // — Submit a reply
    const handleReplySubmit = (e, parentId) => {
        e.preventDefault();
        const { name, text } = replyForm;
        if (!name || !text) return;
        const newReply = {
            id: Date.now(),
            name: name.trim(),
            text: text.trim(),
            timestamp: new Date().toISOString(),
            likes: 0,
        };
        setComments((all) =>
            all.map((c) =>
                c.id === parentId
                    ? { ...c, replies: [...c.replies, newReply] }
                    : c
            )
        );
        setReplyingTo(null);
    };

    // — Load more
    const loadMore = () =>
        setVisibleCount((v) => v + BATCH_SIZE);

    return (
        <div className="py-12 bg-[#F6F5F2]">
            {/* — Leave A Comment */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                <span className="text-gray-800">Leave A </span>
                <span className="text-orange-600">Comment</span>
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        className="bg-[#E9EAEF] rounded-full px-4 py-2 focus:ring-2 focus:ring-orange-400 w-full"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        className="bg-[#E9EAEF] rounded-full px-4 py-2 focus:ring-2 focus:ring-orange-400 w-full"
                    />
                </div>
                <textarea
                    name="text"
                    placeholder="Add a comment…"
                    value={form.text}
                    onChange={handleChange}
                    className="bg-[#E9EAEF] rounded-2xl px-4 py-3 focus:ring-2 focus:ring-orange-400 w-full mt-4 h-32 resize-none"
                />
                <div className="text-right mt-2">
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-full">
                        Submit
                    </button>
                </div>
            </form>

            <hr className="my-8 border-gray-300 border-dotted" />

            {/* — Comments Header */}
            <div className="flex items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Comments</h3>
                <span className="ml-2 bg-orange-600 text-white rounded-full text-xs px-2">
                    {comments.length}
                </span>
            </div>

            {/* — Comment List */}
            <div className="space-y-8">
                {comments.slice(0, visibleCount).map((c) => {
                    const timeAgo = formatDistanceToNow(new Date(c.timestamp), {
                        addSuffix: true,
                    });

                    return (
                        <div key={c.id}>
                            <div className="flex space-x-4">
                                {/* Avatar */}
                                <div>
                                    <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-medium">
                                        {getInitials(c.name)}
                                    </div>
                                </div>

                                {/* Main comment */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-medium text-gray-800">{c.name}</h4>
                                        <span className="text-sm text-gray-500">{timeAgo}</span>
                                    </div>
                                    <p className="mt-2 text-gray-700">{c.text}</p>

                                    <div className="flex items-center space-x-6 mt-2 text-gray-500 text-sm">
                                        <button
                                            onClick={() => handleLike(c.id)}
                                            className="flex items-center hover:text-orange-600"
                                        >
                                            <ThumbsUp className="w-4 h-4" />
                                            <span className="ml-1">{c.likes}</span>
                                        </button>

                                        <button className="flex items-center hover:text-orange-600">
                                            <MessageCircle className="w-4 h-4" />
                                            <span className="ml-1">{c.replies.length}</span>
                                        </button>

                                        <button
                                            onClick={() => openReply(c.id)}
                                            className="hover:text-orange-600"
                                        >
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* — Inline Reply Form */}
                            {replyingTo === c.id && (
                                <form
                                    onSubmit={(e) => handleReplySubmit(e, c.id)}
                                    className="mt-4 ml-14 space-y-2"
                                >
                                    <input
                                        name="name"
                                        placeholder="Your name"
                                        value={replyForm.name}
                                        onChange={handleReplyChange}
                                        className="bg-[#E9EAEF] rounded-full px-3 py-1 focus:ring-2 focus:ring-orange-400 w-1/2"
                                    />
                                    <textarea
                                        name="text"
                                        placeholder="Your reply…"
                                        value={replyForm.text}
                                        onChange={handleReplyChange}
                                        className="bg-[#E9EAEF] rounded-2xl px-3 py-2 focus:ring-2 focus:ring-orange-400 w-full h-20 resize-none"
                                    />
                                    <div className="text-right">
                                        <button className="bg-orange-600 text-white px-4 py-1 rounded-full">
                                            Submit Reply
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* — Nested Replies */}
                            <div className="mt-6 ml-14 space-y-6">
                                {c.replies.map((r) => {
                                    const rTime = formatDistanceToNow(new Date(r.timestamp), {
                                        addSuffix: true,
                                    });
                                    return (
                                        <div key={r.id} className="flex space-x-4">
                                            <div>
                                                <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center font-medium">
                                                    {getInitials(r.name)}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center">
                                                    <h5 className="font-medium text-gray-800">
                                                        {r.name}
                                                    </h5>
                                                    <span className="text-sm text-gray-500">
                                                        {rTime}
                                                    </span>
                                                </div>
                                                <p className="mt-1 text-gray-700">{r.text}</p>
                                                <button
                                                    onClick={() => handleLike(r.id, c.id)}
                                                    className="mt-2 flex items-center text-gray-500 text-sm hover:text-orange-600"
                                                >
                                                    <ThumbsUp className="w-4 h-4" />
                                                    <span className="ml-1">{r.likes}</span>
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* — Load More */}
            {visibleCount < comments.length && (
                <div className="text-center mt-8">
                    <button
                        onClick={loadMore}
                        className="bg-orange-600 text-white px-6 py-2 rounded-full"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
