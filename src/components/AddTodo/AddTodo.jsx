const AddTodo = ({ onSubmitForm, handleChange, formData }) => {
  return (
    <form onSubmit={onSubmitForm}>
      <label>Enter Title: </label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={formData.title}
      />
      <br />
      <label>Enter Description: </label>
      <input
        type="text"
        name="desc"
        placeholder="Description"
        onChange={handleChange}
        value={formData.desc}
      />
      <br />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
