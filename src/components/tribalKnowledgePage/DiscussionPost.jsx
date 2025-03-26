"use client";
import React from "react";

export const DiscussionPost = ({
  avatarUrl,
  title,
  category,
  content,
  comments,
  views,
  timeAgo,
  categoryColor = "blue",
  isPdf = false,
}) => {
  const categoryColors = {
    blue: "text-blue-600 bg-blue-100",
    emerald: "text-emerald-600 bg-emerald-100",
  };

  return (
    <article className="p-5 bg-white rounded-lg shadow-sm">
      <div className="flex gap-3.5">
        <img
          src={avatarUrl}
          alt=""
          className="w-[41px] h-[41px] rounded-full"
        />
        <div className="flex-1">
          <div className="flex gap-1.5 items-center mb-3">
            <h2 className="text-base font-bold">{title}</h2>
            <span
              className={`px-2.5 py-1 text-xs rounded-full ${categoryColors[categoryColor]}`}
            >
              {category}
            </span>
          </div>
          <p className="mb-5 text-sm text-gray-600">{content}</p>

          {isPdf ? (
            <div className="flex gap-4 items-center">
              <span
                className={`px-2.5 py-1 text-xs rounded-full ${categoryColors.emerald}`}
              >
                Resource
              </span>
              <button className="flex gap-1.5 items-center text-sm text-gray-500">
                <svg>...</svg>
                <span>Download PDF</span>
              </button>
              <div className="flex gap-1.5 items-center text-sm text-gray-500">
                <svg>...</svg>
                <span>89 downloads</span>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 items-center text-xs text-gray-500">
              <div className="flex gap-1.5 items-center">
                <svg>...</svg>
                <span>{comments} comments</span>
              </div>
              <div className="flex gap-1.5 items-center">
                <svg>...</svg>
                <span>{views} views</span>
              </div>
              <div className="flex gap-1.5 items-center">
                <svg>...</svg>
                <span>{timeAgo}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
