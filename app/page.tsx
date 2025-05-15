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
    /* eslint-disable  @typescript-eslint/no-unsafe-assignment*/
    /* eslint-disable  @typescript-eslint/no-unsafe-member-access */
    const inputYear = event.target[0].value;
    if (inputYear == 2004) setResult("is a leap year");
    else setResult("is not a leap year");
  }

  if (leapYearCalculator) {
    return (
      <div>
        <h1>Leap Year Calculator</h1>
        <form className="leap-year-form" onSubmit={onSubmit}>
          <input type="number" id="year_field" name="year" />
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
