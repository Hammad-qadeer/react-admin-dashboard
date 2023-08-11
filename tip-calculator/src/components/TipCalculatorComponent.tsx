import React from "react";

const TipCalculatorComponent = () => {
  return (
    <div>
      <section className="panel">
        <form>
          <label htmlFor="bill">Bill</label>
          <input name="tip" type="number" id="bill" />
          <label htmlFor="bill">Selected Tip %</label>
          <fieldset className="tip-amounts">
            <label htmlFor="">
              <input name="tip" type="radio" value="5" />
              5%
            </label>
            <label htmlFor="">
              <input name="tip" type="radio" value="10" />
              10%
            </label>
            <label htmlFor="">
              <input name="tip" type="radio" value="15" />
              15%
            </label>
            <label htmlFor="">
              <input name="tip" type="radio" value="25" />
              25%
            </label>
            <label htmlFor="">
              <input name="tip" type="radio" value="50" />
              50%
            </label>
            <input type="text" className="custom-tip"/>
          </fieldset>
          Select Tip % 5% 10% 15% 25% 50% Custom Number of People Tip Amount /
          person Total / person Reset
        </form>
      </section>
    </div>
  );
};

export default TipCalculatorComponent;
