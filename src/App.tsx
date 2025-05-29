import React, { useState } from "react";

interface FormState {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
}

function App() {
  const [form, setForm] = useState<FormState>({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const query = encodeURIComponent(form.field1);
      const response = await fetch(`https://www.google.com/search?q=${query}`);
      const html = await response.text();
      // Získání titulku stránky z HTML
      const match = html.match(/<title>(.*?)<\/title>/i);
      const title = match ? match[1] : "Nebylo nalezeno";
      setForm((f: FormState) => ({ ...f, field4: title }));
    } catch (err) {
      setForm((f: FormState) => ({ ...f, field4: "Chyba při vyhledávání" }));
    } finally {
      setLoading(false);
    }
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
          readOnly
        />
        <button type="submit" disabled={loading}>
          {loading ? "Vyhledávám..." : "Vyhledat"}
        </button>
      </form>
    </main>
  );
}

export default App;
