import "fetch-everywhere";
import Paragraph from "../components/Paragraph";
import ReactMarkdown from "react-markdown/with-html";
import { GithubStyles } from "../styles/github";

function Index(props: any) {
    return (
        <>
            <ReactMarkdown source={props.markdown} escapeHtml={false} />

            <h1>DEMO: Hello world</h1>
            <Paragraph
                style={{ color: "red" }}
                text={"This is a paragraph. Why don't you click me?"}
            />
            {GithubStyles}
        </>
    );
}

Index.getInitialProps = async () => {
    const markdown = await fetch(
        "//course-1.willemliu.now.sh/static/README.md"
    ).then((res) => res.text());
    return { markdown };
};

export default Index;
