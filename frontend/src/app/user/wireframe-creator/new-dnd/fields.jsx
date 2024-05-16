// These will be available from the sidebar
export const fields = [
    {
      type: "input",
      title: "Text Input"
    },
    {
      type: "select",
      title: "Select"
    },
    {
      type: "text",
      title: "Text"
    },
    {
      type: "button",
      title: "Button"
    },
    {
      type: "textarea",
      title: "Text Area"
    },
    {
      type: "header",
      title: "Header"
    },
    {
      type: "image",
      title: "image"

    },
    {
      type: "paragraph",
      title: "paragraph"
    },
    {

      type: "footer",
      title: "footer"
    },
    {
      type: "navbar",
      title: "navbar"
    },
    {
      type: "heading",
      title: "heading"
    },
    {
      type: "form",
      title: "form"
    },
    {
      type: "table",
      title: "table"
    }

  ];
  
  // These define how we render the field
  export const renderers = {
    input: () => <input type="text" placeholder="This is a text input" />,
    textarea: () => <textarea rows="5" />,
    select: () => (
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    ),
    text: () => (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    ),
    button: () => <button className="w-full border border-slate-800 py-4 px-3">Button</button>,
    header: () => (
      <div className="w-full h-48 bg-slate-400 border border-black flex items-center justify-center">
        <h2 className="font-bold text-center text-3xl text-slate-800">Header</h2>
      </div>
    ),
    image: () => <img className="w-full border border-slate-800 py-4 px-3"/>,
    header: () => (
      <div className="w-full h-48 bg-slate-400 border border-black flex items-center justify-center">
        <h2 className="font-bold text-center text-3xl text-slate-800">image</h2>
      </div>
    ),
    paragraph: () => <p className="w-full border border-slate-800 py-4 px-3">paragraph</p>,
    header: () => (
      <div className="w-full h-48 bg-slate-400 border border-black flex items-center justify-center">
        <h2 className="font-bold text-center text-3xl text-slate-800">paragraph</h2>
      </div>
    ),
    footer: () => <footer className="w-full border border-slate-800 py-4 px-3">footer</footer>,
    header: () => (
      <div className="w-full h-48 bg-slate-400 border border-black flex items-center justify-center">
        <h2 className="font-bold text-center text-3xl text-slate-800">footer</h2>
      </div>
    ),
    navbar: () => <nav className="w-full border border-slate-800 py-4 px-3">navbar</nav>,
    header: () => (
      <div className="w-full h-48 bg-slate-400 border border-black flex items-center justify-center">
        <h2 className="font-bold text-center text-3xl text-slate-800">navbar</h2>
      </div>
    ),
    heading: () => <h className="w-full border border-slate-800 py-4 px-3">heading</h>,
    header: () => (
      <div className="w-full h-48 bg-slate-400 border border-black flex items-center justify-center">
        <h2 className="font-bold text-center text-3xl text-slate-800">heading</h2>
      </div>
    ),
    form: () => <form className="w-full border border-slate-800 py-4 px-3">form</form>,
    header: () => (
      <div className="w-full h-48 bg-slate-400 border border-black flex items-center justify-center">
        <h2 className="font-bold text-center text-3xl text-slate-800">form</h2>
      </div>
  
  ),
  table: () => <table className="w-full border border-slate-800 py-4 px-3">table</table>,
    header: () => (
      <div className="w-full h-48 bg-slate-400 border border-black flex items-center justify-center">
        <h2 className="font-bold text-center text-3xl text-slate-800">table</h2>
      </div>
    )

  };
  