import React from "react";

function TodoInput({
  onClick,
  // title,
  // description,
  // startDate,
  // endDate,
  formData,
  // onTitleChange,
  // onDescChange,
  // onStartDateChange,
  // onEndDateChange,
  onChangeData,
  onSubmit,
}) {
  return (
    <>
      <form
        className="input_form container mx-auto"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <fieldset className="d-flex column border-none gap-2">
          <legend className="d-none">Todo App</legend>
          <div className="d-flex justify-content-between mt-5">
            <button onClick={onClick} className="btn">
              meeting
            </button>
            <button onClick={onClick} className="btn">
              design
            </button>
            <button onClick={onClick} className="btn">
              travel
            </button>
            <button onClick={onClick} className="btn">
              free time
            </button>
            <button onClick={onClick} className="btn btn-active">
              etc
            </button>
          </div>
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Todo Title"
            className="fs-2 p-1 round-1 border-none bg mt-1"
            onChange={onChangeData}
            required
            autoComplete="off"
          />
          <textarea
            type="text"
            name="desc"
            value={formData.desc}
            rows="5"
            color="20"
            placeholder="Add a Description"
            className="fs-2 p-1 round-1 border-none bg mt-1 fw-bol"
            onChange={onChangeData}
            autoComplete="off"
          />
          <div className="d-flex justify-content-between">
            <div className="d-flex column gap-1">
              <label htmlFor="start_day">시작일</label>
              <input
                type="date"
                name="start"
                value={formData.start}
                className="start_day fs-2 p-1 round-1 border-none bg fw-bol"
                onChange={onChangeData}
              />
            </div>
            <div className="d-flex column gap-1">
              <label htmlFor="end_day">종료일</label>
              <input
                type="date"
                name="end"
                value={formData.end}
                className="end_day fs-2 p-1 round-1 border-none bg fw-bol"
                onChange={onChangeData}
              />
            </div>
          </div>
          <div className="member d-flex gap-3 mt-2 justify-content-between">
            <label>참석자</label>
            <input
              type="number"
              name="member"
              value={formData.members}
              className="fw-bol fs-2 p-1 round-1 border-none bg"
              onChange={onChangeData}
            />
          </div>
          <input
            type="text"
            name="guest"
            value={formData.guest}
            className="fw-bol fs-2 p-1 round-1 border-none bg mt-2"
            onChange={onChangeData}
          />
          <button type="submit" className="btn btn-submit fs-2 p-1 round-1 border-none bg mt-5">
            일정등록
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default TodoInput;
