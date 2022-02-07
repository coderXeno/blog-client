import React from "react";
import articleContent from "./Article-Content";
import Articles from "../components/Articles";

export default function ArticleList(){
    return(
        <div>
            <h1 className="article-heading sm:text-4xl text-2xl font-bold mt-6 text-gray-900 heading">Articles</h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <Articles articles={articleContent}/>
                </div>
            </div>
        </div>
    )
}