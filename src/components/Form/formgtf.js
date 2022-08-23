<div className="form">
  <form>
    <div className="input-container">
      <input
        className="form-input"
        value={formValues.name}
        placeholder="Name"
        type="text"
        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
      />
      <input
        className="form-input"
        value={formValues.nic}
        placeholder="NIC"
        type="text"
        onChange={(e) => setFormValues({ ...formValues, nic: e.target.value })}
      />
      <select
        className="form-input select"
        value={formValues.gender}
        onChange={(e) =>
          setFormValues({ ...formValues, gender: e.target.value })
        }
      >
        <option className="input-option" value="other">
          Other
        </option>
        <option className="input-option" value="female">
          Female
        </option>
        <option className="input-option" value="male">
          Male
        </option>
      </select>
    </div>

    <div className="button-container">
      <a
        className="primary-btn"
        onClick={() =>
          setFormValues({
            ...formValues,
            name: "",
            nic: "",
            gender: "other",
          })
        }
      >
        Clear
      </a>
      <a className="primary-btn add" onClick={() => validateAndSubmit()}>
        Add
      </a>
    </div>
  </form>
</div>;
