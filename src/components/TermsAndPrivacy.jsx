// Kriish

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Users, FileText, Eye, Lock, AlertCircle } from 'lucide-react';

const TermsAndPrivacy = () => {
  const [activeTab, setActiveTab] = useState('terms');
  // by default i have kept the active tab as terms . This state defines what we are showing on the screen
  // active tab will do the designing of the buttons depending on which one is clicked
  const [expandedSection, setExpandedSection] = useState(null);
  // expandedSection will contain the sectionkey of the section which has just expanded

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };


  // the contents of every section tag is children.
  const Section = ({ title, children, icon: Icon, sectionKey }) => (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all duration-200"
      >
        <div className="flex items-center space-x-3">
          <Icon className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        {expandedSection === sectionKey ? (
          <ChevronUp className="w-5 h-5 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-600" />
        )}
      </button>
      {expandedSection === sectionKey && (
        <div className="p-4 bg-white border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-800 via-blue-800 to-blue-400 text-white">
        <div className="max-w-6xl mx-auto px-4 pt-20 mt-3 mb-3 pb-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Company Name</h1>
            <p className="text-xl text-blue-100">Legal Information & Privacy Policy</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('terms')}
              className={`py-4 px-2 font-medium text-sm transition-colors duration-200 border-b-2 ${
                activeTab === 'terms'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" /> 
              Terms of Service
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`py-4 px-2 font-medium text-sm transition-colors duration-200 border-b-2 ${
                activeTab === 'privacy'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Shield className="w-4 h-4 inline mr-2" />
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'terms' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Service</h2>
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <Section title="Acceptance of Terms" icon={FileText} sectionKey="acceptance">
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using Tutor Connect ("the Service"), you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our service. These terms apply to all visitors, 
                  users, and others who access or use the service.
                </p>
              </Section>

              <Section title="Description of Service" icon={Users} sectionKey="service">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tutor Connect is an online platform that connects students with qualified tutors for educational purposes. 
                  Our services include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Matching students with appropriate tutors based on subject and requirements</li>
                  <li>Facilitating communication between tutors and students</li>
                  <li>Processing payments and scheduling sessions</li>
                  <li>Providing a secure platform for educational interactions</li>
                </ul>
              </Section>

              <Section title="User Accounts and Registration" icon={Users} sectionKey="accounts">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Account Creation</h4>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Users must provide accurate and complete information during registration</li>
                      <li>Users are responsible for maintaining the confidentiality of their account credentials</li>
                      <li>Users must be at least 13 years old to create an account</li>
                      <li>Users under 18 require parental consent</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Account Types</h4>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li><strong>Students:</strong> Can search for and book tutoring sessions</li>
                      <li><strong>Tutors:</strong> Must provide verification of qualifications and undergo background checks</li>
                      <li><strong>Parents/Guardians:</strong> Can create accounts on behalf of minors</li>
                    </ul>
                  </div>
                </div>
              </Section>

              <Section title="Payment and Refunds" icon={AlertCircle} sectionKey="payment">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Payment Processing</h4>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Payments are processed securely through our third-party payment processors</li>
                      <li>Service fees and tutor rates are clearly displayed before booking</li>
                      <li>All transactions are encrypted and secure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Refund Policy</h4>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Cancellations made 24+ hours in advance: Full refund</li>
                      <li>Cancellations made less than 24 hours: 50% refund</li>
                      <li>No-shows: No refund</li>
                      <li>Technical issues on our end: Full refund</li>
                    </ul>
                  </div>
                </div>
              </Section>

              <Section title="Safety and Child Protection" icon={Shield} sectionKey="safety">
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>All tutors undergo comprehensive background checks</li>
                  <li>Sessions can be monitored for safety purposes</li>
                  <li>Parents/guardians have the right to observe sessions involving minors</li>
                  <li>We maintain a zero-tolerance policy for inappropriate behavior</li>
                  <li>24/7 support available for safety concerns</li>
                </ul>
              </Section>

              <Section title="Limitation of Liability" icon={AlertCircle} sectionKey="liability">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tutor Connect serves as a platform connecting tutors and students. We are not responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>The quality of tutoring services provided by individual tutors</li>
                  <li>Actions or behavior of individual users</li>
                  <li>Technical issues beyond our reasonable control</li>
                  <li>Educational outcomes or results</li>
                  <li>Disputes between tutors and students</li>
                </ul>
              </Section>
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <Section title="Information We Collect" icon={Eye} sectionKey="collect">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Name, email address, and phone number</li>
                      <li>Educational background and qualifications (for tutors)</li>
                      <li>Payment information (processed securely through third parties)</li>
                      <li>Profile photos and biographical information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Usage Information</h4>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Session attendance and participation data</li>
                      <li>Platform usage statistics and preferences</li>
                      <li>Communication logs for safety and quality purposes</li>
                      <li>Device information and IP addresses</li>
                    </ul>
                  </div>
                </div>
              </Section>

              <Section title="How We Use Your Information" icon={Users} sectionKey="usage">
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>To provide and improve our tutoring services</li>
                  <li>To match students with appropriate tutors</li>
                  <li>To process payments and manage accounts</li>
                  <li>To communicate with users about their sessions and account</li>
                  <li>To ensure safety and security of our platform</li>
                  <li>To analyze usage patterns and improve user experience</li>
                </ul>
              </Section>

              <Section title="Information Sharing" icon={Shield} sectionKey="sharing">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>With tutors and students to facilitate educational sessions</li>
                  <li>With payment processors to handle transactions</li>
                  <li>With law enforcement when required by law</li>
                  <li>With service providers who help us operate our platform</li>
                  <li>In case of a business transfer or merger</li>
                </ul>
              </Section>

              <Section title="Data Security" icon={Lock} sectionKey="security">
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>We use industry-standard encryption to protect your data</li>
                  <li>Regular security audits and updates</li>
                  <li>Secure data centers with restricted access</li>
                  <li>Employee training on data protection best practices</li>
                  <li>Incident response procedures for any security breaches</li>
                </ul>
              </Section>

              <Section title="Your Rights" icon={Users} sectionKey="rights">
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data in a portable format</li>
                  <li>File a complaint with relevant data protection authorities</li>
                </ul>
              </Section>

              <Section title="Contact Information" icon={AlertCircle} sectionKey="contact">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these terms or our privacy practices, please contact us:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>Email:</strong> legal@tutorconnect.com</p>
                  <p className="text-gray-700"><strong>Address:</strong> 123 Education Street, Learning City, LC 12345</p>
                  <p className="text-gray-700"><strong>Phone:</strong> (555) 123-4567</p>
                </div>
              </Section>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default TermsAndPrivacy;