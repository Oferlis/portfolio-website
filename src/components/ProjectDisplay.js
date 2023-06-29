export default function ProjectDisplay(content) {
    return(<div className="proj-display">
           <h2>{content.content.head}</h2>
           <div>{content.content.body}</div>
    </div>)
}