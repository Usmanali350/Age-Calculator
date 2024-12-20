import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = (e) => {
    e.preventDefault();

    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    // Adjust days
    if (days < 0) {
        months--;
        const prevMonthLastDate = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += prevMonthLastDate;
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    setAge(`You are ${years} years, ${months} months, and ${days} days old.`);
};

  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-6 col-sm-12">
          <motion.div
            className="p-4 mt-5 shadow"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p>
              <h1>"Time is a gift, use it wisely."</h1>
              <h4>
                This message emphasizes the importance of appreciating the time we have,
                making the most out of every year, and living life with purpose.
              </h4>
            </p>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-sm-12">
          <motion.div
            className="p-4 shadow rounded mt-5"
            style={{
              background: 'linear-gradient(135deg, rgb(45, 70, 99), rgb(62, 76, 90))',
            }}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form onSubmit={calculateAge}>
              <label htmlFor="dob" className="form-label h3">
                Enter your date of birth:
              </label>
              <br />
              <input
                className="form-control"
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-light w-100 mt-5">
                Calculate Age
              </button>
            </form>
            {age && (
              <div className="text-light mt-4">
                <h4>{age}</h4>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
