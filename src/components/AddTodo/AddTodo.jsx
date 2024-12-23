const AddTodo = ({ onSubmitForm, handleChange, formData }) => {
  return (
    <form onSubmit={onSubmitForm}>
      <br />

      <label style={{ marginRight: "45px" }}>Enter Title: </label>
      <br />
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={formData.title}
      />
      <br />

      <label>Enter Description: </label>
      <br />

      <input
        type="text"
        name="desc"
        placeholder="Description"
        onChange={handleChange}
        value={formData.desc}
      />

      <br />
      <br />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
