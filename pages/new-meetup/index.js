import Head from "next/head";
import { Fragment } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await axios.post("/api/new-meetup", enteredMeetupData);
    console.log(response);
    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
};

export default NewMeetupPage;
