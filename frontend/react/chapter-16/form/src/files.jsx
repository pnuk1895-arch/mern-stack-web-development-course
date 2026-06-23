import { useState } from "react";

  function App() {
  const [formData, setFormData] = useState({});
  
  function handleChange(e) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="Name"
        onChange={handleChange}
        placeholder="Enter name"
      />

      <input
        name="Phone"
        onChange={handleChange}
        placeholder="Phone number"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App