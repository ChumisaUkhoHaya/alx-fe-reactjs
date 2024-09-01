import { useState } from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/form-handling-react/node_modules/@types/react'
import reactLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/4dba59e7bcc23eebfa9727b46877c2a3ea0a74d5/form-handling-react/src/assets/react.svg'
import viteLogo from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/4dba59e7bcc23eebfa9727b46877c2a3ea0a74d5/form-handling-react/public/vite.svg'
import 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/4dba59e7bcc23eebfa9727b46877c2a3ea0a74d5/form-handling-react/src/App.css'
import RegistrationForm from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/75db4a88af6302e8806342996baf0d6cedc1b8ee/form-handling-react/src/components/RegistrationForm.jsx';
import FormikForm from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/form-handling-react/src/components/FormikForm.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="App">
      <h1>Registration Form with Controlled Components</h1>
      <RegistrationForm />
      <h1>Registration Form with Formik</h1>
      <FormikForm />
    </div>
    </>
  )
}

export default App
