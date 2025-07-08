import { Link } from "react-router-dom";

export default function DoctorSettings() {
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
              src="https://ui-avatars.com/api/?name=Joe+Doe"
              alt=" DoeJoe Avatar"
            />
            <p id="pat-name">Joe Doe</p>
          </div>
          <button className="update_profile-btn-doc">Update Profile</button>
        </div>

        <div className="basic-info-doc" id="profile">
          <h4>Basic Information</h4>
          <form id="basic-info">
            <div className="basic">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                value="Joe"
                disabled
                required
              />
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="Email"
                name="Email"
                value="Joedoe@gmail.com"
                disabled
                required
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value="0712345678"
                disabled
                required
              />
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value="Kenyan"
                disabled
                required
              />
              <label htmlFor="emergency-name"> Emergency Contact Name </label>
              <input
                type="text"
                id="emergency-name"
                name="emergency-name"
                value="Patrick Doe"
                disabled
                required
              />
              <button className="update-basic-btn-doc" type="submit">
                Update
              </button>
            </div>
            <div className="basic">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                value="Doe"
                disabled
                required
              />
              <label htmlFor="DOB">Date of Birth</label>
              <input
                type="date"
                id="DOB"
                name="DOB"
                value="1983-01-01"
                disabled
                required
              />
              <label htmlFor="Gender">Gender</label>
              <select name="Gender" id="Gender">
                <option value="Male" disabled selected>
                  Male
                </option>
                <option value="Female" disabled>
                  Female
                </option>
                <option value="Other" disabled>
                  Other
                </option>
              </select>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value="Nairobi,Kenya"
                disabled
                required
              />
              <label htmlFor="emergency-phone">Emergency Phone Number</label>
              <input
                type="tel"
                id="emergency-phone"
                name="emergency-phone"
                value="0712345678"
                disabled
                required
              />
              <button className="save-basic-btn-doc" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>

        {/* Other Information Section (Cleaned up) */}
        <div className="other-info-doc" id="other-info">
          <h4>Other Information</h4>
          <form id="other-info-form">
            <div className="others">
              <div className="other">
                <label htmlFor="specialization">Specialisation(s)</label>
                <input
                  type="text"
                  id="specialization"
                  name="specialization"
                  value="Cardiology, Neurology"
                  disabled
                  required
                />

                <label htmlFor="university">University</label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value="University of Nairobi"
                  disabled
                  required
                />

                <label htmlFor="experience">Years of Experience</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value="10"
                  disabled
                  required
                />
              </div>

              <div className="other">
                <label htmlFor="license">License Number</label>
                <input
                  type="text"
                  id="license"
                  name="license"
                  value="123456789"
                  disabled
                  required
                />

                <label htmlFor="certifications">Certifications</label>
                <input
                  type="text"
                  id="certifications"
                  name="certifications"
                  value="Board Certified in Cardiology"
                  disabled
                  required
                />

                <label htmlFor="hospital">Current Hospital</label>
                <input
                  type="text"
                  id="hospital"
                  name="hospital"
                  value="Nairobi Hospital"
                  disabled
                  required
                />
              </div>

              <div className="other">
                <label htmlFor="address">Hospital Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value="Nairobi, Kenya"
                  disabled
                  required
                />

                <label htmlFor="hours">Working Hours</label>
                <input
                  type="text"
                  id="hours"
                  name="hours"
                  value="Mon-Fri: 8 AM - 5 PM"
                  disabled
                  required
                />

                <label htmlFor="fee">Consultation Fee</label>
                <input
                  type="text"
                  id="fee"
                  name="fee"
                  value="KES 3000"
                  disabled
                  required
                />
              </div>
            </div>

            <div className="others2">
              <div className="others-2">
                <label htmlFor="online">
                  Available for Online Consultation?
                </label>
                <select name="online" id="online">
                  <option value="Yes" disabled selected>
                    Yes
                  </option>
                  <option value="No" disabled>
                    No
                  </option>
                </select>
                <button className="update-medical-btn-doc" type="submit">
                  Update
                </button>
              </div>

              <div className="others-21">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  cols="50"
                  disabled
                  required
                >
                  Dr. Joe Doe is a highly experienced...
                </textarea>
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
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  value="Joe Doe"
                  disabled
                  required
                />

                <label htmlFor="expiry-date">Expiry Date</label>
                <input
                  type="text"
                  id="expiry-date"
                  name="expiry-date"
                  value="12/25"
                  disabled
                  required
                />
              </div>

              <div className="payment2">
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  value="XXXX XXXX XXXX 3456"
                  disabled
                  required
                />

                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value="256"
                  disabled
                  required
                />
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
            <input
              type="password"
              id="current-password"
              name="current-password"
              required
            />
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              required
            />
            <label htmlFor="confirm-password">Confirm New Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />
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
