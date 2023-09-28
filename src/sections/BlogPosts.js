import SectionSeperator from "../components/sectionSeperator";

export default function BlogPosts() {
  return (
    <div id="blog-posts" className="div-ex blog-div">
      <SectionSeperator sectionName="Blog Posts" />
      <div className="grid-container">
        <div
          className="card"
          onClick={() =>
            window.open(
              "https://dev.to/oferlis/chatgpt-how-i-used-it-to-convert-http-requests-to-openapi-document-1n4m"
            )
          }
        >
          <div className="main-content">
            <p className="heading">
              ChatGPT: how I used it to convert HTTP requests to OpenAPI
              document
            </p>
            <div className="categories">
              <span>ChatGPT</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
        <div
          className="card"
          onClick={() =>
            window.open(
              "https://dev.to/oferlis/history-lesson-what-are-class-components-4pga"
            )
          }
        >
          <div className="main-content">
            <p className="heading">
              History lesson: what are class components in React?
            </p>
            <div className="categories">
              <span>Frontend</span>
              <span>React</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="main-content">
            <p className="heading">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
