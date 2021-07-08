const mongoose = require("mongoose");

const credentialSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  reset: Boolean,
  isadmin: Boolean
});

const Credential = mongoose.model("Credential", credentialSchema);

const postSchema = new mongoose.Schema({
  userid: mongoose.Schema.Types.ObjectId,
  c_name: String,
  c_role: String,
  branch: String,
  desc: String,
  u_name: String,
  title: String,
  time: Date
});

const Post = mongoose.model("Post", postSchema);
postSchema.index({ time: 1 });

const companySchema = new mongoose.Schema({
  company_name: String,
  company_roles: [String]
});

const Company = mongoose.model("Company", companySchema);

const adminmailsSchema = new mongoose.Schema({
  email: String
});

const Admin = mongoose.model("Admin", adminmailsSchema);

module.exports = { Credential, Post, Company, Admin };
