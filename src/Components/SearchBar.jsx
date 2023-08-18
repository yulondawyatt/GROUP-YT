import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <aside id="search">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <div className="row">
              <label htmlFor="searchBar" className="col-auto col-form-label">
                Search YouTube
              </label>
              <div className="col">
                <input
                  id="searchBar"
                  className="form-control"
                  name="searchBar"
                  type="text"
                />
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-danger">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </aside>
    </div>
  )
}

export default SearchBar