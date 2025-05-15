"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

// ?leapYearCalculator=on
export default function Page() {
  const searchParamList = useSearchParams();
  const [result, setResult] = useState<string | null>(null);
  const leapYearCalculator = searchParamList!.get("leapYearCalculator");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult("is not a leap year");
  }

  if (leapYearCalculator) {
    return (
      <div>
        <h1>Leap Year Calculator</h1>
        <form className="leap-year-form" onSubmit={onSubmit}>
          <input type="number" id="year_field" />
          <input type="submit" />
          {result && <h2>{result}</h2>}
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Leap Year Calculator</h1>
        <h2>Coming Soon!</h2>
      </div>
    );
  }
}
