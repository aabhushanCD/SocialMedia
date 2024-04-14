export default function Welcome({ onGetClicked }) {
  return (
    <>
      <center>
        <p>Wellcome to facebook</p>
        <button
          type="button"
          className="btn btn-success"
          onClick={onGetClicked}
        >
          Fetch data from server
        </button>
      </center>
    </>
  );
}
