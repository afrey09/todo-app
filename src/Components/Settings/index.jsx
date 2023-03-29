import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';

const Settings = (props) => {

  const { pageItems, showComplete, sort, setSort, setPageItems, setShowComplete, saveLocalStorage } = useContext(SettingsContext);


const handleSubmit = (e) => {
  e.preventDefault();
  saveLocalStorage();
};

return (
  <>
    <form onSubmit={handleSubmit}>

      <h1>Manage Settings</h1>

      <label>
        <span>Page Items</span>
        <input name="pageItems" type="number" checked={pageItems} onChange={(e) => setPageItems(e.target.checked)}/>
      </label>

      <label>
        <span>Sort by:</span>
        <input name="sort" type="text" value={sort} onChange={(e) => setSort(e.target.value)} />
      </label>

      <label>
        <span>Show Complete</span>
        <input type="checkbox" name="showComplete" checked={showComplete} onChange={(e) => setShowComplete(e.target.value)} />
      </label>

      <label>
        <button type="submit">Submit</button>
      </label>
    </form>
  </>
)
}

export default Settings;