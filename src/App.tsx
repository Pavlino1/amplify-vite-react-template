import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(
      `Vyhledat: ${form.field1}, ${form.field2}, ${form.field3}, ${form.field4}`
    );
  }

  return (
    <main>
      <h1>Amplify úvodní stránka</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          maxWidth: 400,
        }}
      >
        <input
          type="text"
          name="field1"
          placeholder="String 1"
          value={form.field1}
          onChange={handleChange}
        />
        <input
          type="text"
          name="field2"
          placeholder="String 2"
          value={form.field2}
          onChange={handleChange}
        />
        <input
          type="text"
          name="field3"
          placeholder="String 3"
          value={form.field3}
          onChange={handleChange}
        />
        <input
          type="text"
          name="field4"
          placeholder="String 4"
          value={form.field4}
          onChange={handleChange}
        />
        <button type="submit">Vyhledat</button>
      </form>
    </main>
  );
}

export default App;
