const Create = () => {
  return (
    <div className="create">
      <h2>Add a new article</h2>
      <form>
        <label>Article title:</label>
        <input type="text" required />
        <label>Article body:</label>
        <textarea required></textarea>
        <label>Article author:</label>
        <select>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Article</button>
      </form>
    </div>
  );
};

export default Create;
