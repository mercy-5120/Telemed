import React from "react";
import { mockPatient } from "../../data";

export default function PatientSettings() {
  return (
    <div className="container-dash-patient">
      <div className="setting-section">
        <h3>SETTINGS</h3>
        <div className="nav-settings">
          <a href="#profile">Profile</a>
          <a href="#medical-info">Medical Info</a>
          <a href="#payment">Billing & Payment</a>
          <a href="#password">Privacy</a>
          <a href="#delete_account">Help</a>
        </div>
        <hr style={{ marginTop: "0px", opacity: 0.4 }} />

        <div className="update-profile_sett">
          <div className="prof">
            <img
              src={`https://ui-avatars.com/api/?name=${mockPatient.first_name}+${mockPatient.last_name}`}
              alt="Patient Avatar"
            />
            <p id="pat-name">{`${mockPatient.first_name} ${mockPatient.last_name}`}</p>
          </div>
          <button className="update_profile-btn">Update Profile</button>
        </div>

        {/* Profile Info */}
        <div className="basic-info" id="profile">
          <h4>Basic Information</h4>
          <form id="basic-info">
            <div className="basic">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                value={mockPatient.first_name}
                disabled
                required
              />

              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="Email"
                value={mockPatient.email}
                disabled
                required
              />

              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                value={mockPatient.phone}
                disabled
                required
              />

              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                value={mockPatient.nationality}
                disabled
                required
              />

              <label htmlFor="emergency-name">Emergency Contact Name</label>
              <input
                type="text"
                id="emergency-name"
                value={mockPatient.emergency_contact_name}
                disabled
                required
              />

              <button className="update-basic-btn" type="submit">
                Update
              </button>
            </div>

            <div className="basic">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                value={mockPatient.last_name}
                disabled
                required
              />

              <label htmlFor="DOB">Date of Birth</label>
              <input
                type="date"
                id="DOB"
                value={mockPatient.dob}
                disabled
                required
              />

              <label htmlFor="Gender">Gender</label>
              <select id="Gender" value={mockPatient.gender} disabled>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={mockPatient.address}
                disabled
                required
              />

              <label htmlFor="emergency-phone">Emergency Phone Number</label>
              <input
                type="tel"
                id="emergency-phone"
                value={mockPatient.emergency_phone}
                disabled
                required
              />

              <button className="save-basic-btn" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>

        {/* Medical Info */}
        <div className="medical-info" id="medical-info">
          <h4>Medical Information</h4>
          <form id="medical-info-form">
            <label htmlFor="blood-type">Blood Type</label>
            <input
              type="text"
              id="blood-type"
              value={mockPatient.blood_type}
              disabled
              required
            />

            <label htmlFor="allergies">Allergies</label>
            <input
              type="text"
              id="allergies"
              value={mockPatient.allergies}
              disabled
              required
            />

            <label htmlFor="conditions">Chronic Conditions</label>
            <input
              type="text"
              id="conditions"
              value={mockPatient.diseases}
              disabled
              required
            />

            <button className="update-medical-btn" type="submit">
              Update
            </button>
          </form>
        </div>

        {/* Payment Info */}
        <div className="payment-info" id="payment">
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
                  value={mockPatient.card.name}
                  disabled
                  required
                />

                <label htmlFor="expiry-date">Expiry Date</label>
                <input
                  type="text"
                  id="expiry-date"
                  value={mockPatient.card.expiry}
                  disabled
                  required
                />
              </div>

              <div className="payment2">
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  value={mockPatient.card.number}
                  disabled
                  required
                />

                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  value={mockPatient.card.cvv}
                  disabled
                  required
                />
              </div>

              <button className="update-payment-btn" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>

        {/* Privacy Settings */}
        <div className="privacy-settings" id="password">
          <h4>Privacy Settings</h4>
          <form id="privacy-form">
            <label htmlFor="current-password">Current Password</label>
            <input type="password" id="current-password" required />

            <label htmlFor="new-password">New Password</label>
            <input type="password" id="new-password" required />

            <label htmlFor="confirm-password">Confirm New Password</label>
            <input type="password" id="confirm-password" required />

            <button className="update-privacy-btn" type="submit">
              Update
            </button>
          </form>
        </div>

        {/* Delete Account */}
        <div className="help-section" id="delete_account">
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
