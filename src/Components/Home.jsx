import React from 'react';
import { motion } from 'framer-motion';

const AgeCalculator = () => {
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row">
        {/* Left side: Text (col-lg-6, col-sm-12) with background color and animation */}
        <div className="col-lg-6 col-sm-12">
          <motion.div
            className="p-4 mt-5 shadow"
            // style={{ background: 'linear-gradient(135deg, #FF6F61, #D4A5A5)' }}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
                <p >
              <h1>"Time is a gift, use it wisely."</h1>

              <h4>This message could emphasize the importance of appreciating the time we have, making the most out of every year, and living life with purpose. It can also connect with the idea that, no matter our age, there's always room for growth, learning, and new experiences.</h4>
            </p>
          </motion.div>
        </div>

        {/* Right side: Form (col-lg-6, col-sm-12) with background color and animation */}
        <div className="col-lg-6 col-sm-12">
          <motion.div
            className="p-4 shadow"
            style={{ background: 'linear-gradient(135deg,rgb(45, 70, 99),rgb(62, 76, 90))' }}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-white">Sample Form</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message here"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
