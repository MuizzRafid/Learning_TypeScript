import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  type MouseEvent,
  type SubmitEvent,
} from "react";

export function FormExample() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("red");
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);

    setName(event.target.value);
  }
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    //  event.key==='Enter' ->do this or do that
  }

  function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  function handleFinalFormSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    //submit the form
  }

  function handleColorChange(event: ChangeEvent<HTMLSelectElement>) {}
  return (
    <form action="" onSubmit={handleFinalFormSubmit}>
      <input
        type="text"
        value={name}
        placeholder="enter your name"
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
      />

      <select value={color} onChange={handleColorChange}>
        <option value="red">Red</option>
      </select>
      <button type="submit" onClick={handleButtonClick}>
        Click
      </button>
    </form>
  );
}
