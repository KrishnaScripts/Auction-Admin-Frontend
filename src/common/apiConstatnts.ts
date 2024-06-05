// const baseUrl = 'http://20.118.160.165:8080/api'
const baseUrl = "http://20.213.247.145:8080/api";
const baseUrlCustomers = "http://20.213.247.145:81/api";
export const base = "http://20.213.247.145:8080";
const sellerBase = "http://20.213.247.145:82/api"

//Login
export const LOGIN = `${baseUrl}/Login/verifyuser`;

//passwords
export const FORGOTPASSWORD = `${baseUrl}/User/ForgotPassword`;
export const RESETPASSWORD = `${baseUrl}/User/ChangePassword`;

// Users
export const GETALLUSERS = `${baseUrl}/User/GetAll`;
export const CREATEUSER = `${baseUrl}/User`;
export const GETUSERBYID = `${baseUrl}/User/GetById`;
export const UPDATEUSER = `${baseUrl}/User/Update`;
export const DELETEUSER = `${baseUrl}/User/DeleteUser`;
export const ADVANCEFILTER = `${baseUrl}/User/AdvancedSerachFilter`;

// Roles
export const GETALLROLES = `${baseUrl}/UserRole/GetAllRole`;
export const CREATEUSERROLE = `${baseUrl}/UserRole/CreateRole`;
export const UPDATEROLE = `${baseUrl}/UserRole/UpdateRole`;
export const GETROLEBYID = `${baseUrl}/UserRole/GetByRoleId`;
export const DELETEROLE = `${baseUrl}/UserRole/DeleteRole`;
export const GETUSERWISEROLE = `${baseUrl}/UserRole/GetUserWiseRole`;
export const SAVEUSERWISEROLE = `${baseUrl}/UserRole/SaveUserWiseRole`;
export const ADVANCEFILTERROLE = `${baseUrl}/UserRole/AdvancedSerachFilter`;

// Company
export const GETPROFILE = `${baseUrl}/Company/GetCompanyById`;
export const UPDATEPROFILE = `${baseUrl}/Company/UpdateCompany`;
export const CREATEPROFILE = `${baseUrl}/Company/CreateCompany`;

// Common
export const GETCOMMONVALUE = `${baseUrl}/Common/GetCommonValuesByKey`;
export const GETMODULELIST = `${baseUrl}/Common/GetModuleList`;
export const GETDEFAULTLOADER = `${baseUrl}/Common/GetDefaultLoader`;
export const GETDEFAULTLOGO = `${baseUrl}/Common/GetDefaultLogo`;

// Categories

export const GETALLCATEGORIES = `${baseUrl}/Category/GetCategoryAll`;
export const CREATECATEGORIES = `${baseUrl}/Category/CreateCategory`;
export const UPDATECATEGORIES = `${baseUrl}/Category/UpdateCategory`;
export const DELETECATEGORIES = `${baseUrl}/Category/DeleteCategory`;
export const GETCATEGORIESBYID = `${baseUrl}/Category/GetCategoryById`;
export const ADVANCEFILTERCATEGORY = `${baseUrl}/Category/AdvancedSerachFilter`;

//ImageConfig
export const IMAGECONFIGAPI = `${baseUrl}/ImageConfiguration/GetImageConfiguration`;
export const IMAGECONFIGAPIUPDATE = `${baseUrl}/ImageConfiguration/UpdateImageConfiguration`;
export const IMAGECONFIGAPICREATE = `${baseUrl}/ImageConfiguration/CreateImageConfiguration`;

//EInvoiceSettings

export const GETEINVOICESETTINGS = `${baseUrl}/EInvoiceSettings/GetEInvoiceSettings`;
export const CREATEEINVOICESETTINGS = `${baseUrl}/EInvoiceSettings/CreateEInvoice`;
export const UPDATEEINVOICESETTINGS = `${baseUrl}/EInvoiceSettings/UpdateEInvoice`;

// Mail Server Settings

export const CREATEMAILSERVER = `${baseUrl}/MailServerSettings/CreateMailServer`;
export const UPDATEMAILSERVER = `${baseUrl}/MailServerSettings/UpdateMailServer`;
export const GETMAILSERVER = `${baseUrl}/MailServerSettings/GetMailServer`;
export const SENDTESTEMAIL = `${baseUrl}/MailServerSettings/SendTestEmail`;

// Email Template

export const GETEMAILTEMPLATE = `${baseUrl}/EmailTemplate/GetByEmailTemplate`;
export const UPDATEEMAILTEMPLATE = `${baseUrl}/EmailTemplate/UpdateEmailTemplate`;
export const SAVEEMAILTEMPLATE = `${baseUrl}/EmailTemplate/SaveEmailTemplate`;

// Seller Report

export const GETSELLERREPORT = `${baseUrl}/SellerReport/GetBySellerReport`;
export const UPDATESELLERREPORT = `${baseUrl}/SellerReport/UpdateSellerReport`;
export const SAVESELLERREPORT = `${baseUrl}/SellerReport/SaveSellerReport`;

// Auction Default
export const GETAUCTIONDEFAULT = `${baseUrl}/AuctionDefault/GetByAuctionDefaultId`;
export const UPDATEAUCTION = `${baseUrl}/AuctionDefault/UpdateAuction`;
export const CREATEAUCTION = `${baseUrl}/AuctionDefault/CreateAuctionDefault`;

// SalesRepresentative
export const GETSALESREPRESENTATIVE = `${baseUrl}/SalesRepContactInfo/GetAllSalesRep`;
export const CREATESALESREPRESENTATIVE = `${baseUrl}/SalesRepContactInfo/CreateSalesRepContactInfo`;
export const DELETESALESREPRESENTATIVE = `${baseUrl}/SalesRepContactInfo/DeleteSalesRep`;
export const ADVANCEFILTERSALESREPRESENTATIVE = `${baseUrl}/SalesRepContactInfo/AdvancedSerachFilter`;
export const CREATESALESREPP = `${baseUrl}/SalesRepContactInfo/CreateSalesRep`;
export const GETSALESREPID = `${baseUrl}/SalesRepContactInfo/GetSaleRepId`;
export const UPDATESALESREP = `${baseUrl}/SalesRepContactInfo/UpdateSalesRep`;

//Bid Increment
export const GETALLBIDINCREMENT = `${baseUrl}/BidIncrement/GetAllBidIncrement`;
export const UPDATEBIDINCREMENT = `${baseUrl}/BidIncrement/UpdateBidIncrement`;

// LotTemplates

export const GETALLLOTTEMPLATE = `${baseUrl}/LotTemplate/GetAllLotTemplate`;
export const GETALLCATEGORYTITLE = `${baseUrl}/LotTemplate/GetAllCategoryTitle`;
export const LOTTEMPLATEFILTER = `${baseUrl}/LotTemplate/AdvancedSerachFilter`;
export const CREATELOTTEMPLATE = `${baseUrl}/LotTemplate/CreateLotTemplate`;
export const GETLOTTEMPLATEID = `${baseUrl}/LotTemplate/GetLotTemplateId`;
export const UPDATELOTTEMPLATE = `${baseUrl}/LotTemplate/UpdateLotTemplate`;
export const DELETELOTTEMPLATE = `${baseUrl}/LotTemplate/DeleteLotTemplate`;

// BP Sales Tax
export const GETBPSALESTAX = `${baseUrl}/BPSalesTax/GetByBPSalesTax`;
export const CREATEBPSALESTAX = `${baseUrl}/BPSalesTax/CreateBPSalesTax`;
export const UPDATEBPSALESTAX = `${baseUrl}/BPSalesTax/UpdateBPSalesTax`;

//SellerCommissionScale
export const GETALLSELLERCOMMISSIONSCALE = `${baseUrl}/SellerCommissionScale/GetAllSellerCommissionScale`;
export const GETALLSELLERCOMMISSIONTAXABLESTATE = `${baseUrl}/SellerCommissionScale/SellerCommissionTaxableState`;
export const SAVESELLERCOMMISSION = `${baseUrl}/SellerCommissionScale/SaveSellerCommissionScale`;
export const CREATETAXABLESTATE = `${baseUrl}/SellerCommissionScale/CreateTaxableStates`;
export const UPDATETAXABLESTATE = `${baseUrl}/SellerCommissionScale/UpdateTaxableStates`;

//salesRepCommission
export const GETALLSALESREPCOMMISSIONSCALE = `${baseUrl}/SalesRepCommissions/GetAllSalesRepCommissionScale`
export const SAVESALESCOMMISSION = `${baseUrl}/SalesRepCommissions/SaveSalesRepCommissionScale`

//Lot temp preview
export const GETLOTTEMPBYID = `${baseUrl}/LotTemplate/GetLotTemplateId`

//seller
export const GETSELLER = `${sellerBase}/Seller/GetAllSellers`
export const CREATESELLERCONTACTINFO = `${sellerBase}/Seller/CreateSellerContactInfo`
export const CREATESELLER = `${sellerBase}/Seller/CreateSeller`
export const DELETESELLER = `${sellerBase}/Seller/DeleteBySellerId`
export const GETBYSELLERID =`${sellerBase}/Seller/GetBySellerId`
export const UPDATESELLER =`${sellerBase}/Seller/UpdateSeller`
export const SELLERADVANCEFILTER = `${sellerBase}/Seller/AdvancedSerachFilter`

//customers
export const GETALLCUSTOMERS = `${baseUrlCustomers}/Customer/GetAllCustomers`
export const CREATECUSTOMERCONTACTINFO = `${baseUrlCustomers}/Customer/CreateCustomerContactInfo`
export const ADVANCEFILTERCUSTOMERS = `${baseUrlCustomers}/Customer/AdvancedSerachFilter`;
export const DELETECUSTOMER = `${baseUrlCustomers}/Customer/DeleteByCustomerId`;
export const CREATECUSTOMER = `${baseUrlCustomers}/Customer/CreateCustomer`;
export const UPDATECUSTOMER = `${baseUrlCustomers}/Customer/UpdateCustomer`;
export const GETCUSTOMERBYID = `${baseUrlCustomers}/Customer/GetByCustomerId`;

// BP By Sales
export const GetBPBYSALES = `${baseUrl}/BPBySales/GetAllBPBySales`
export const CREATEBPBYSALES = `${baseUrl}/BPBySales/CreateBPSales`

// Sales Records

export const GETALLSALESRECORDS = `${baseUrl}/SalesRecord/GetAllSalesRevised`
export const CREATESALESRECORD = `${baseUrl}/SalesRecord/CreateSalesRecord`
export const DELETESALESRECORD = `${baseUrl}/SalesRecord/DeleteSalesRecord`
export const CREATESALESRECORDINFO = `${baseUrl}/SalesRecord/CreateSalesRecordInformation`
export const UPDATESALESRECORD = `${baseUrl}/SalesRecord/UpdateSalesRecord`
export const GETBYSALESRECORDID = `${baseUrl}/SalesRecord/GetBySalesRecordId`
export const ADVANCEFILTERSALESRECORD = `${baseUrl}/SalesRecord/AdvancedSerachFilter`;
// Auction
export const GETAUCTION = `${baseUrl}/Auction/GetAllAuction`
export const CREATEADDRESSDATES = `${baseUrl}/AuctionInfo/CreateAddressAndDates`
export const CREATEWEBTEXT = `${baseUrl}/AuctionInfo/CreateWebText`
export const CREATEAUTOMATEDEMAIL = `${baseUrl}/AuctionInfo/CreateAutomatedMail`
export const CREATEAUCTIONCHECKLIST = `${baseUrl}/AuctionInfo/CreateAuctionCheckList`

// Value Default
export const GETALLVALUEDEFAULT = `${baseUrl}/ValueDefault/GetAllObjectType`;
export const UPDATEVALUEDEFAULT = `${baseUrl}/ValueDefault/`;


// Dashboard

export const GETALLCOUNT = `${baseUrl}/Dashboard/GetAllCount`;
export const GETALLAUCTIONS =  `${baseUrl}/Auction/GetAllAuction`; 