import React, { useEffect, useState } from "react";
import articles from "./Article-Content";
import Articles from "../components/Articles";
import NotFound from "./NotFound";
import CommentsList from "../components/CommentsList";
import CommentForm from "../components/CommentForm";

export default function Article({match}){

    const name = match.params.name;
    const article = articles.find((article)=> article.name === name);

    const [articleInfo,setArticleInfo] = useState({
        comments: []
    });

    useEffect(()=>{
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
            console.log(body);
        };
        fetchData();
    },[name]);

    if(!article)
        return <NotFound/>
        const otherArticles = articles.filter(article => article.name !== name)

    return(
        <div>
            <h1 className="article-heading sm:text-4xl text-2xl font-bold mt-6 text-gray-900 heading">
                {article.title}
            </h1>
            <div className="article-div">
                {article.content.map((paragraph,index)=>(
                    <p className="article-content mx-auto leading-relaxed text-base mb-4" key={index}>{paragraph}</p>
                ))}
            </div>
            <CommentsList comments={articleInfo.comments}/>

            <CommentForm 
                articleName={name}
                setArticleInfo={setArticleInfo}
            />

            <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900 other-heading">Other Articles</h1>
            <div className="flex flex-wrap -m-4">
                <Articles articles={otherArticles}/>
            </div>
        </div>
    )
}