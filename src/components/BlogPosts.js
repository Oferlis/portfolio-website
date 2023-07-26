export default function BlogPosts() {
  return (
    <div id="blog-posts" className="div-ex row-div">
      <h1 className="skills-head">Blog posts</h1>
      <div className="grid-container">
        <div
          class="card"
          onClick={() =>
            window.open(
              "https://dev.to/oferlis/chatgpt-how-i-used-it-to-convert-http-requests-to-openapi-document-1n4m"
            )
          }
        >
          <div class="main-content">
            <p class="heading">
              ChatGPT: how I used it to convert HTTP requests to OpenAPI
              document
            </p>
            <div class="categories">
              <span>ChatGPT</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="main-content">
            <p class="heading">upcoming...</p>
          </div>
        </div>
        <div class="card">
          <div class="main-content">
            <p class="heading">Upcoming...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
