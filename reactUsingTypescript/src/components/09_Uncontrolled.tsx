//for uncontrolled we need to use Ref because it used for direct Node Access
//and it also not record for form data

import { useRef, type SubmitEvent } from "react";

function getString(fd: FormData, key: string): string | null {
  const result = fd.get(key);
  return typeof result === "string" ? result : null;
}
function getNumberValue(fd: FormData, key: string): number | null {
  const extractStringValueFirst = getString(fd, key);

  if (extractStringValueFirst === null) return null;
  const convertToNull = Number(extractStringValueFirst);

  return Number.isFinite(convertToNull) ? convertToNull : null;
}

export function UncontrolledForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const extractName = getString(fd, "name") ?? "no name";

    const extractNumber = getNumberValue(fd, "age");
  }

  return (
    <form onSubmit={handleFormSubmit} ref={formRef}>
      <input type="text" name="name" defaultValue="Guest" />
      <input type="number" name="age" defaultValue="18" min={0} />
      <button type="submit">Submit</button>
    </form>
  );
}

//controlled form vs uncontrolled form

//controlled form:- complex logic , live validation, derive ui from the value ,cross field logic
//when weak logic and easy things
