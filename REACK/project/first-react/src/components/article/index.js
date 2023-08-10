import ArticleContent from "./article-content";
import ArticleHeader from "./article-header";

const Article = ({articleH}) => {

    return (
        <div className="article">
            <ArticleHeader articleH = {articleH[0]}></ArticleHeader>
            <ArticleContent articleH = {articleH[1]}></ArticleContent>
        </div>
    )
}
export default Article;