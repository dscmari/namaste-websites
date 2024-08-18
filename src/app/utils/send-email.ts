
import { FormData } from '../components/Contact'

export function sendEmail(data: FormData) {
  console.log("sendEmail is called")
  const apiEndpoint = '/namaste-websites/api/email'; //delete namaste-webistes in path for deployment other than gh-pages

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      console.log(err)
      alert(err);
    });
}
