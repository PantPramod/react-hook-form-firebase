import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { getDatabase, push, ref, set } from "firebase/database";
import { getStorage, uploadBytesResumable, getDownloadURL, ref as refstorage } from "firebase/storage";
import MessageBox from './components/MessageBox';
import ReCaptcha from './components/ReCaptcha';
import Input from './components/Input';
import TextArea from './components/TextArea';
import Select from './components/Select';
import CustomUpload from './components/CustomUpload';
import image from './images/image.png';
import './Firebase/Firebase';
import './App.css';



type Inputs = {
  fullName: string,
  email: string,
  company: string,
  phone: string,
  cC: string,
  link: string,
  info: string,
  gender: string,
}

function App() {

  const [resume, setResume] = useState<FileList>();
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [isVerified, setIsVarified] = useState<Boolean>(false);
  const [isSending, setIsSending] = useState(false);

  const defaultValues = {
    fullName: '',
    email: '',
    company: '',
    phone: '',
    cC: '',
    link: '',
    info: '',
    gender: '',
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isVerified) {
      if (resume && (resume[0].size < 5000000 && resume[0].type === "application/pdf")) {

        setIsSending((prev) => !prev);

        const storage = getStorage();
        const storageRef = refstorage(storage, `files/${resume[0].name}`);
        const uploadTask = uploadBytesResumable(storageRef, resume[0]);

        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          (error) => { console.log(error) },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              const db = getDatabase();
              const postListRef = ref(db, 'formdata');
              const newPostRef = push(postListRef);

              set(newPostRef, {
                fullName: data.fullName,
                email: data.email,
                resume: downloadURL,
                company: data.company,
                phone: data.phone,
                cC: data.cC,
                link: data.link,
                info: data.info,
                gender: data.gender,
              })

              setShowMessageBox(true)
              reset(defaultValues);
              setResume(undefined);
              setIsVarified(false);
              setIsSending(false);
            });
          }
        );
      }
      else {
        alert("Incorrect Resume File")
        setIsSending(false)
      }
    }
  }



  const onClose = () => {
    setShowMessageBox(false);
  }


  return (<div className="app">
    <header>
      <div className='fixed'>
        <div className='img-box'>
          <img src={image} alt="Image" />
        </div>
      </div>
    </header>

    <div className='content'>
      <div className='wraper'>

        <div className='sub-heading'>
          <h2>Full-Stack Engineer</h2>
          <div className='dest-group'>
            <div className='dest'>REMOTE OPTIONAL /</div>
            <div className='dest'>PRODUCT - ENGINEERING /</div>
            <div className='dest'>FULL-TIME</div>
          </div>
        </div>
      </div>

      <div className='wrapper-form'>
        <form onSubmit={handleSubmit(onSubmit)}>

          <h4>Submit Your Application</h4>

          <Input
            details={{ type: "text", label: "Full Name" }}
            register={register}
            isRequired
            title="fullName"
            minLength={10}
            errors={errors.fullName}
          />

          <Input
            details={{ type: "email", label: "Email" }}
            register={register}
            isRequired
            title="email"
            errors={errors.email}
            pattern={/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/}
          />

          <CustomUpload
            getValue={(data) => setResume(data)}
            reset={showMessageBox}
          />

          <Input
            details={{ type: "number", label: "Country Code" }}
            register={register}
            isRequired
            title="cC"
            minLength={2}
            errors={errors.cC}
          />

          <Input
            details={{ type: "number", label: "Phone Number" }}
            register={register}
            isRequired
            title="phone"
            minLength={6}
            errors={errors.phone}
          />

          <Input
            details={{ type: "text", label: "Current Company", }}
            register={register}
            title="company"
          />

          <Input
            details={{ type: "text", label: "LenkedIn URL", }}
            register={register}
            title="link"
            errors={errors.link}
            pattern={/^https:\/\/www.linkedin.com\/.*$/}
          />

          <TextArea
            register={register}
            label="Additional Information"
            title="info"
            minLength={30}
            errors={errors.info}
          />

          <Select
            register={register}
            label="Gender"
            title="gender"
            list={["Male", "Female"]}
          />

          <ReCaptcha
            OnClick={(isvarify: Boolean) => setIsVarified(isvarify)}
            reset={showMessageBox}
          />

          <div className='btn-container'>
            <input type="submit" className='sub' value={isSending ? "Sending...." : "Submit Application"} disabled={isSending || showMessageBox} />
          </div>

        </form>
      </div >
      {showMessageBox && <MessageBox OnClose={onClose} />}
    </div >


    <div className='main-footer'>
      <div className='footer'>
        <a href="https://render.com/" className='render'>Render Home Page</a>
        <a href="https://lever.co/" className="image-link"><span>Jobs powered by </span>
          <img alt="Lever logo" src="/img/lever-logo-full.svg" />
        </a>
      </div>
    </div>

  </div>);
}

export default App;
