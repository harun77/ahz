import './Page.css';
import Login from './login';

function Page() {
  return (
    <div className="Page">
      <header className="Page-header">
        <Login />
      </header>
    </div>
  );
}

export default Page;