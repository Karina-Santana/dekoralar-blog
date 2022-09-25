import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Anonymous");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, image, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      // history.go(1);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new article</h2>
      <form onSubmit={handleSubmit}>
        <label>Article title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Article image url:</label>
        <input
          type="text"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Article body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Article author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Anonymous">Anonymous</option>
          <option value="Michael Scott">Michael Scott</option>
          <option value="Dwight Schrute">Dwight Schrute</option>
          <option value="Homer Simpson">Homer Simpson</option>
        </select>
        {!isPending && <button>Add Article</button>}
        {isPending && <button disabled>Adding article...</button>}
      </form>
    </div>
  );
};

export default Create;
