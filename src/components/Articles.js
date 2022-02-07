import React from "react";
import {Link} from "react-router-dom";

export default function Articles({articles}){
    return(
        <div>
            {articles.map((article,index)=>(
                        <div key={index} className="p-4 md:w-1/2">
                            <div className="article-container h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <div className="post-card post-image">
                                        <Link className="post-link" to={`/article/${article.name}`}>
                                            <img className="post-img lg:h-48 md:h-36 w-full object-cover object-center" src={article.thumbnail} alt="blog"/>
                                        </Link>

                                        <Link className="post-link" key={index} to={`/article/${article.name}`}>
                                            <h3 className="title-font text-lg font-medium text-gary-900 mb-3">{article.title}</h3>
                                        </Link>

                                        <p className="post-link leading-relaxed mb-3">
                                            <span className="link-content">{article.content[0].substring(0,120)}...</span>
                                        </p>

                                        <Link className="post-link link-btn flex-bg-indigo-500 inline-flex item-center md:mb-2 lg:mb-0" to={`/article/${article.name}`}>
                                            <span className="link-button">Keep Reading</span>
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    ))}
        </div>
    )
}