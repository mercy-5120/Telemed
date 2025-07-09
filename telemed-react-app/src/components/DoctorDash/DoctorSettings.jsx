import { useEffect, useState } from "react";
import { doctors } from "../../data";

export default function DoctorSettings() {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const loggedInDoctor = JSON.parse(localStorage.getItem("loggedInDoctor"));
    if (loggedInDoctor) {
      const matchedDoctor = doctors.find((doc) => doc.id === loggedInDoctor.id);
      setDoctor(matchedDoctor);
    }
  }, []);

  if (!doctor) {
    return <p>Loading doctor info...</p>;
  }

  const {
    first_name,
    last_name,
    email,
    phone,
    nationality,
    dob,
    gender,
    address,
    emergency_name,
    emergency_phone,
    specialization,
    university,
    experience,
    license,
    certifications,
    hospital,
    hospital_address,
    hours,
    fee,
    online,
    bio,
    card_holder = `${first_name} ${last_name}`,
    card_number = "XXXX XXXX XXXX 3456",
    expiry_date = "12/25",
    cvv = "256",
  } = doctor;

  return (
    <div className="container-dash-doc">
      <div className="setting-section">
        <h3>SETTINGS</h3>

        <div className="nav-settings" id="nav-settings">
          <a href="#profile">Profile</a>
          <a href="#other-info">Other Info</a>
          <a href="#payment">Billing & Payment</a>
          <a href="#password">Privacy</a>
          <a href="#delete_account">Help</a>
        </div>

        <hr style={{ marginTop: "0px", opacity: 0.4 }} />

        <div className="update-profile_sett">
          <div className="prof">
            <img
              src={`https://ui-avatars.com/api/?name=${first_name}+${last_name}`}
              alt={`${first_name} ${last_name}`}
            />
            <p id="pat-name">{`${first_name} ${last_name}`}</p>
          </div>
          <button className="update_profile-btn-doc">Update Profile</button>
        </div>

        <div className="basic-info-doc" id="profile">
          <h4>Basic Information</h4>
          <form id="basic-info">
            <div className="basic">
              <label htmlFor="first-name">First Name</label>
              <input type="text" value={first_name} disabled required />

              <label htmlFor="Email">Email</label>
              <input type="email" value={email} disabled required />

              <label htmlFor="phone">Phone</label>
              <input type="tel" value={phone} disabled required />

              <label htmlFor="nationality">Nationality</label>
              <input type="text" value={nationality} disabled required />

              <label htmlFor="emergency-name">Emergency Contact Name</label>
              <input type="text" value={emergency_name} disabled required />

              <button className="update-basic-btn-doc" type="submit">
                Update
              </button>
            </div>

            <div className="basic">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" value={last_name} disabled required />

              <label htmlFor="DOB">Date of Birth</label>
              <input type="date" value={dob} disabled required />

              <label htmlFor="Gender">Gender</label>
              <select value={gender} disabled>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="address">Address</label>
              <input type="text" value={address} disabled required />

              <label htmlFor="emergency-phone">Emergency Phone Number</label>
              <input type="tel" value={emergency_phone} disabled required />

              <button className="save-basic-btn-doc" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>

        {/* Other Info Section */}
        <div className="other-info-doc" id="other-info">
          <h4>Other Information</h4>
          <form id="other-info-form">
            <div className="others">
              <div className="other">
                <label htmlFor="specialization">Specialisation(s)</label>
                <input type="text" value={specialization} disabled required />

                <label htmlFor="university">University</label>
                <input type="text" value={university} disabled required />

                <label htmlFor="experience">Years of Experience</label>
                <input type="number" value={experience} disabled required />
              </div>

              <div className="other">
                <label htmlFor="license">License Number</label>
                <input type="text" value={license} disabled required />

                <label htmlFor="certifications">Certifications</label>
                <input type="text" value={certifications} disabled required />

                <label htmlFor="hospital">Current Hospital</label>
                <input type="text" value={hospital} disabled required />
              </div>

              <div className="other">
                <label htmlFor="hospital-address">Hospital Address</label>
                <input type="text" value={hospital_address} disabled required />

                <label htmlFor="hours">Working Hours</label>
                <input type="text" value={hours} disabled required />

                <label htmlFor="fee">Consultation Fee</label>
                <input type="text" value={fee} disabled required />
              </div>
            </div>

            <div className="others2">
              <div className="others-2">
                <label htmlFor="online">
                  Available for Online Consultation?
                </label>
                <select value={online} disabled>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>

                <button className="update-medical-btn-doc" type="submit">
                  Update
                </button>
              </div>

              <div className="others-21">
                <label htmlFor="bio">Bio</label>
                <textarea value={bio} rows="4" cols="50" disabled required />
              </div>
            </div>
          </form>
        </div>

        <div className="payment-info-doc" id="payment">
          <h4>Payment Information</h4>
          <p>Update your card and payment details here.</p>
          <hr />
          <form id="payment-info-form">
            <h4>Card Details</h4>
            <div className="payment">
              <div className="payment1">
                <label htmlFor="card-holder">Name on Card</label>
                <input type="text" value={card_holder} disabled required />

                <label htmlFor="expiry-date">Expiry Date</label>
                <input type="text" value={expiry_date} disabled required />
              </div>

              <div className="payment2">
                <label htmlFor="card-number">Card Number</label>
                <input type="text" value={card_number} disabled required />

                <label htmlFor="cvv">CVV</label>
                <input type="text" value={cvv} disabled required />
              </div>

              <button className="update-payment-btn-doc" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>

        <div className="privacy-settings-doc" id="password">
          <h4>Privacy Settings</h4>
          <form id="privacy-form">
            <label htmlFor="current-password">Current Password</label>
            <input type="password" required />

            <label htmlFor="new-password">New Password</label>
            <input type="password" required />

            <label htmlFor="confirm-password">Confirm New Password</label>
            <input type="password" required />

            <button className="update-privacy-btn-doc" type="submit">
              Update
            </button>
          </form>
        </div>

        <div className="delete_account-doc" id="delete_account-doc">
          <h4>Delete Account</h4>
          <p>
            Deleting your account is a permanent action. Once deleted, you will
            no longer be able to access your account, and all of your personal
            information, medical records, appointments, and saved preferences
            will be permanently removed from our system. This action cannot be
            undone.
          </p>
          <button className="delete-account-btn">Delete Account</button>
        </div>
      </div>
    </div>
  );
}
