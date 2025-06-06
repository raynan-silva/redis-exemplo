export const sqlData = {
  department: [
    {dept_id: 1, name: 'Operations'},
    {dept_id: 2, name: 'Loans'},
    {dept_id: 3, name: 'Administration'}
  ],
  
  branch: [
    {branch_id: 1, name: 'Headquarters', address: '3882 Main St.', city: 'Waltham', state: 'MA', zip: '02451'},
    {branch_id: 2, name: 'Woburn Branch', address: '422 Maple St.', city: 'Woburn', state: 'MA', zip: '01801'},
    {branch_id: 3, name: 'Quincy Branch', address: '125 Presidential Way', city: 'Quincy', state: 'MA', zip: '02169'},
    {branch_id: 4, name: 'So. NH Branch', address: '378 Maynard Ln.', city: 'Salem', state: 'NH', zip: '03079'}
  ],
  
  employee: [
    {emp_id: 1, fname: 'Michael', lname: 'Smith', start_date: '2001-06-22', end_date: null, superior_emp_id: null, dept_id: 3, title: 'President', assigned_branch_id: 1},
    {emp_id: 2, fname: 'Susan', lname: 'Barker', start_date: '2002-09-12', end_date: null, superior_emp_id: 1, dept_id: 3, title: 'Vice President', assigned_branch_id: 1},
    {emp_id: 3, fname: 'Robert', lname: 'Tyler', start_date: '2000-02-09', end_date: null, superior_emp_id: 1, dept_id: 3, title: 'Treasurer', assigned_branch_id: 1},
    {emp_id: 4, fname: 'Susan', lname: 'Hawthorne', start_date: '2002-04-24', end_date: null, superior_emp_id: 3, dept_id: 1, title: 'Operations Manager', assigned_branch_id: 1},
    {emp_id: 5, fname: 'John', lname: 'Gooding', start_date: '2003-11-14', end_date: null, superior_emp_id: 4, dept_id: 2, title: 'Loan Manager', assigned_branch_id: 1},
    {emp_id: 6, fname: 'Helen', lname: 'Fleming', start_date: '2004-03-17', end_date: null, superior_emp_id: 4, dept_id: 1, title: 'Head Teller', assigned_branch_id: 1},
    {emp_id: 7, fname: 'Chris', lname: 'Tucker', start_date: '2004-09-15', end_date: null, superior_emp_id: 6, dept_id: 1, title: 'Teller', assigned_branch_id: 1},
    {emp_id: 8, fname: 'Sarah', lname: 'Parker', start_date: '2002-12-02', end_date: null, superior_emp_id: 6, dept_id: 1, title: 'Teller', assigned_branch_id: 1},
    {emp_id: 9, fname: 'Jane', lname: 'Grossman', start_date: '2002-05-03', end_date: null, superior_emp_id: 6, dept_id: 1, title: 'Teller', assigned_branch_id: 1},
    {emp_id: 10, fname: 'Paula', lname: 'Roberts', start_date: '2002-07-27', end_date: null, superior_emp_id: 4, dept_id: 1, title: 'Head Teller', assigned_branch_id: 2},
    {emp_id: 11, fname: 'Thomas', lname: 'Ziegler', start_date: '2000-10-23', end_date: null, superior_emp_id: 10, dept_id: 1, title: 'Teller', assigned_branch_id: 2},
    {emp_id: 12, fname: 'Samantha', lname: 'Jameson', start_date: '2003-01-08', end_date: null, superior_emp_id: 10, dept_id: 1, title: 'Teller', assigned_branch_id: 2},
    {emp_id: 13, fname: 'John', lname: 'Blake', start_date: '2000-05-11', end_date: null, superior_emp_id: 4, dept_id: 1, title: 'Head Teller', assigned_branch_id: 3},
    {emp_id: 14, fname: 'Cindy', lname: 'Mason', start_date: '2002-08-09', end_date: null, superior_emp_id: 13, dept_id: 1, title: 'Teller', assigned_branch_id: 3},
    {emp_id: 15, fname: 'Frank', lname: 'Portman', start_date: '2003-04-01', end_date: null, superior_emp_id: 13, dept_id: 1, title: 'Teller', assigned_branch_id: 3},
    {emp_id: 16, fname: 'Theresa', lname: 'Markham', start_date: '2001-03-15', end_date: null, superior_emp_id: 4, dept_id: 1, title: 'Head Teller', assigned_branch_id: 4},
    {emp_id: 17, fname: 'Beth', lname: 'Fowler', start_date: '2002-06-29', end_date: null, superior_emp_id: 16, dept_id: 1, title: 'Teller', assigned_branch_id: 4},
    {emp_id: 18, fname: 'Rick', lname: 'Tulman', start_date: '2002-12-12', end_date: null, superior_emp_id: 16, dept_id: 1, title: 'Teller', assigned_branch_id: 4}
  ],
  
  product_type: [
    {product_type_cd: 'ACCOUNT', name: 'Customer Accounts'},
    {product_type_cd: 'LOAN', name: 'Individual and Business Loans'},
    {product_type_cd: 'INSURANCE', name: 'Insurance Offerings'}
  ],
  
  product: [
    {product_cd: 'CHK', name: 'checking account', product_type_cd: 'ACCOUNT', date_offered: '2000-01-01', date_retired: null},
    {product_cd: 'SAV', name: 'savings account', product_type_cd: 'ACCOUNT', date_offered: '2000-01-01', date_retired: null},
    {product_cd: 'MM', name: 'money market account', product_type_cd: 'ACCOUNT', date_offered: '2000-01-01', date_retired: null},
    {product_cd: 'CD', name: 'certificate of deposit', product_type_cd: 'ACCOUNT', date_offered: '2000-01-01', date_retired: null},
    {product_cd: 'MRT', name: 'home mortgage', product_type_cd: 'LOAN', date_offered: '2000-01-01', date_retired: null},
    {product_cd: 'AUT', name: 'auto loan', product_type_cd: 'LOAN', date_offered: '2000-01-01', date_retired: null},
    {product_cd: 'BUS', name: 'business line of credit', product_type_cd: 'LOAN', date_offered: '2000-01-01', date_retired: null},
    {product_cd: 'SBL', name: 'small business loan', product_type_cd: 'LOAN', date_offered: '2000-01-01', date_retired: null}
  ],
  
  customer: [
    {cust_id: 1, fed_id: '111-11-1111', cust_type_cd: 'I', address: '47 Mockingbird Ln', city: 'Lynnfield', state: 'MA', postal_code: '01940'},
    {cust_id: 2, fed_id: '222-22-2222', cust_type_cd: 'I', address: '372 Clearwater Blvd', city: 'Woburn', state: 'MA', postal_code: '01801'},
    {cust_id: 3, fed_id: '333-33-3333', cust_type_cd: 'I', address: '18 Jessup Rd', city: 'Quincy', state: 'MA', postal_code: '02169'},
    {cust_id: 4, fed_id: '444-44-4444', cust_type_cd: 'I', address: '12 Buchanan Ln', city: 'Waltham', state: 'MA', postal_code: '02451'},
    {cust_id: 5, fed_id: '555-55-5555', cust_type_cd: 'I', address: '2341 Main St', city: 'Salem', state: 'NH', postal_code: '03079'},
    {cust_id: 6, fed_id: '666-66-6666', cust_type_cd: 'I', address: '12 Blaylock Ln', city: 'Waltham', state: 'MA', postal_code: '02451'},
    {cust_id: 7, fed_id: '777-77-7777', cust_type_cd: 'I', address: '29 Admiral Ln', city: 'Wilmington', state: 'MA', postal_code: '01887'},
    {cust_id: 8, fed_id: '888-88-8888', cust_type_cd: 'I', address: '472 Freedom Rd', city: 'Salem', state: 'NH', postal_code: '03079'},
    {cust_id: 9, fed_id: '999-99-9999', cust_type_cd: 'I', address: '29 Maple St', city: 'Newton', state: 'MA', postal_code: '02458'},
    {cust_id: 10, fed_id: '04-1111111', cust_type_cd: 'B', address: '7 Industrial Way', city: 'Salem', state: 'NH', postal_code: '03079'},
    {cust_id: 11, fed_id: '04-2222222', cust_type_cd: 'B', address: '287A Corporate Ave', city: 'Wilmington', state: 'MA', postal_code: '01887'},
    {cust_id: 12, fed_id: '04-3333333', cust_type_cd: 'B', address: '789 Main St', city: 'Salem', state: 'NH', postal_code: '03079'},
    {cust_id: 13, fed_id: '04-4444444', cust_type_cd: 'B', address: '4772 Presidential Way', city: 'Quincy', state: 'MA', postal_code: '02169'}
  ],
  
  individual: [
    {cust_id: 1, fname: 'James', lname: 'Hadley', birth_date: '1972-04-22'},
    {cust_id: 2, fname: 'Susan', lname: 'Tingley', birth_date: '1968-08-15'},
    {cust_id: 3, fname: 'Frank', lname: 'Tucker', birth_date: '1958-02-06'},
    {cust_id: 4, fname: 'John', lname: 'Hayward', birth_date: '1966-12-22'},
    {cust_id: 5, fname: 'Charles', lname: 'Frasier', birth_date: '1971-08-25'},
    {cust_id: 6, fname: 'John', lname: 'Spencer', birth_date: '1962-09-14'},
    {cust_id: 7, fname: 'Margaret', lname: 'Young', birth_date: '1947-03-19'},
    {cust_id: 8, fname: 'Louis', lname: 'Blake', birth_date: '1977-07-01'},
    {cust_id: 9, fname: 'Richard', lname: 'Farley', birth_date: '1968-06-16'}
  ],
  
  business: [
    {cust_id: 10, name: 'Chilton Engineering', state_id: '12-345-678', incorp_date: '1995-05-01'},
    {cust_id: 11, name: 'Northeast Cooling Inc.', state_id: '23-456-789', incorp_date: '2001-01-01'},
    {cust_id: 12, name: 'Superior Auto Body', state_id: '34-567-890', incorp_date: '2002-06-30'},
    {cust_id: 13, name: 'AAA Insurance Inc.', state_id: '45-678-901', incorp_date: '1999-05-01'}
  ],
  
  officer: [
    {officer_id: 1, cust_id: 10, fname: 'John', lname: 'Chilton', title: 'President', start_date: '1995-05-01', end_date: null},
    {officer_id: 2, cust_id: 11, fname: 'Paul', lname: 'Hardy', title: 'President', start_date: '2001-01-01', end_date: null},
    {officer_id: 3, cust_id: 12, fname: 'Carl', lname: 'Lutz', title: 'President', start_date: '2002-06-30', end_date: null},
    {officer_id: 4, cust_id: 13, fname: 'Stanley', lname: 'Cheswick', title: 'President', start_date: '1999-05-01', end_date: null}
  ],
  
  account: [
    {account_id: 1, product_cd: 'CHK', cust_id: 1, open_date: '2000-01-15', close_date: null, last_activity_date: '2005-01-04', status: 'ACTIVE', open_branch_id: 2, open_emp_id: 10, avail_balance: 1057.75, pending_balance: 1057.75},
    {account_id: 2, product_cd: 'SAV', cust_id: 1, open_date: '2000-01-15', close_date: null, last_activity_date: '2004-12-19', status: 'ACTIVE', open_branch_id: 2, open_emp_id: 10, avail_balance: 500.00, pending_balance: 500.00},
    {account_id: 3, product_cd: 'CD', cust_id: 1, open_date: '2004-06-30', close_date: null, last_activity_date: '2004-06-30', status: 'ACTIVE', open_branch_id: 2, open_emp_id: 10, avail_balance: 3000.00, pending_balance: 3000.00},
    {account_id: 4, product_cd: 'CHK', cust_id: 2, open_date: '2001-03-12', close_date: null, last_activity_date: '2004-12-27', status: 'ACTIVE', open_branch_id: 2, open_emp_id: 10, avail_balance: 2258.02, pending_balance: 2258.02},
    {account_id: 5, product_cd: 'SAV', cust_id: 2, open_date: '2001-03-12', close_date: null, last_activity_date: '2004-12-11', status: 'ACTIVE', open_branch_id: 2, open_emp_id: 10, avail_balance: 200.00, pending_balance: 200.00},
    {account_id: 7, product_cd: 'CHK', cust_id: 3, open_date: '2002-11-23', close_date: null, last_activity_date: '2004-11-30', status: 'ACTIVE', open_branch_id: 3, open_emp_id: 13, avail_balance: 1057.75, pending_balance: 1057.75},
    {account_id: 8, product_cd: 'MM', cust_id: 3, open_date: '2002-12-15', close_date: null, last_activity_date: '2004-12-05', status: 'ACTIVE', open_branch_id: 3, open_emp_id: 13, avail_balance: 2212.50, pending_balance: 2212.50},
    {account_id: 10, product_cd: 'CHK', cust_id: 4, open_date: '2003-09-12', close_date: null, last_activity_date: '2005-01-03', status: 'ACTIVE', open_branch_id: 1, open_emp_id: 1, avail_balance: 534.12, pending_balance: 534.12},
    {account_id: 11, product_cd: 'SAV', cust_id: 4, open_date: '2000-01-15', close_date: null, last_activity_date: '2004-10-24', status: 'ACTIVE', open_branch_id: 1, open_emp_id: 1, avail_balance: 767.77, pending_balance: 767.77},
    {account_id: 12, product_cd: 'MM', cust_id: 4, open_date: '2004-09-30', close_date: null, last_activity_date: '2004-11-11', status: 'ACTIVE', open_branch_id: 1, open_emp_id: 1, avail_balance: 5487.09, pending_balance: 5487.09},
    {account_id: 13, product_cd: 'CHK', cust_id: 5, open_date: '2004-01-27', close_date: null, last_activity_date: '2005-01-05', status: 'ACTIVE', open_branch_id: 4, open_emp_id: 16, avail_balance: 2237.97, pending_balance: 2897.97},
    {account_id: 14, product_cd: 'CHK', cust_id: 6, open_date: '2002-08-24', close_date: null, last_activity_date: '2004-11-29', status: 'ACTIVE', open_branch_id: 1, open_emp_id: 1, avail_balance: 122.37, pending_balance: 122.37},
    {account_id: 15, product_cd: 'CD', cust_id: 6, open_date: '2004-12-28', close_date: null, last_activity_date: '2004-12-28', status: 'ACTIVE', open_branch_id: 1, open_emp_id: 1, avail_balance: 10000.00, pending_balance: 10000.00},
    {account_id: 17, product_cd: 'CD', cust_id: 7, open_date: '2004-01-12', close_date: null, last_activity_date: '2004-01-12', status: 'ACTIVE', open_branch_id: 2, open_emp_id: 10, avail_balance: 5000.00, pending_balance: 5000.00},
    {account_id: 18, product_cd: 'CHK', cust_id: 8, open_date: '2001-05-23', close_date: null, last_activity_date: '2005-01-03', status: 'ACTIVE', open_branch_id: 4, open_emp_id: 16, avail_balance: 3487.19, pending_balance: 3487.19},
    {account_id: 19, product_cd: 'SAV', cust_id: 8, open_date: '2001-05-23', close_date: null, last_activity_date: '2004-10-12', status: 'ACTIVE', open_branch_id: 4, open_emp_id: 16, avail_balance: 387.99, pending_balance: 387.99},
    {account_id: 21, product_cd: 'CHK', cust_id: 9, open_date: '2003-07-30', close_date: null, last_activity_date: '2004-12-15', status: 'ACTIVE', open_branch_id: 1, open_emp_id: 1, avail_balance: 125.67, pending_balance: 125.67},
    {account_id: 22, product_cd: 'MM', cust_id: 9, open_date: '2004-10-28', close_date: null, last_activity_date: '2004-10-28', status: 'ACTIVE', open_branch_id: 1, open_emp_id: 1, avail_balance: 9345.55, pending_balance: 9845.55},
    {account_id: 23, product_cd: 'CD', cust_id: 9, open_date: '2004-06-30', close_date: null, last_activity_date: '2004-06-30', status: 'ACTIVE', open_branch_id: 1, open_emp_id: 1, avail_balance: 1500.00, pending_balance: 1500.00},
    {account_id: 24, product_cd: 'CHK', cust_id: 10, open_date: '2002-09-30', close_date: null, last_activity_date: '2004-12-15', status: 'ACTIVE', open_branch_id: 4, open_emp_id: 16, avail_balance: 23575.12, pending_balance: 23575.12},
    {account_id: 25, product_cd: 'BUS', cust_id: 10, open_date: '2002-10-01', close_date: null, last_activity_date: '2004-08-28', status: 'ACTIVE', open_branch_id: 4, open_emp_id: 16, avail_balance: 0.00, pending_balance: 0.00},
    {account_id: 27, product_cd: 'BUS', cust_id: 11, open_date: '2004-03-22', close_date: null, last_activity_date: '2004-11-14', status: 'ACTIVE', open_branch_id: 2, open_emp_id: 10, avail_balance: 9345.55, pending_balance: 9345.55},
    {account_id: 28, product_cd: 'CHK', cust_id: 12, open_date: '2003-07-30', close_date: null, last_activity_date: '2004-12-15', status: 'ACTIVE', open_branch_id: 4, open_emp_id: 16, avail_balance: 38552.05, pending_balance: 38552.05},
    {account_id: 29, product_cd: 'SBL', cust_id: 13, open_date: '2004-02-22', close_date: null, last_activity_date: '2004-12-17', status: 'ACTIVE', open_branch_id: 3, open_emp_id: 13, avail_balance: 50000.00, pending_balance: 50000.00}
  ],
  
  transaction: [
    {txn_id: 1, txn_date: '2000-01-15 00:00:00', account_id: 1, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2000-01-15 00:00:00'},
    {txn_id: 2, txn_date: '2000-01-15 00:00:00', account_id: 2, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2000-01-15 00:00:00'},
    {txn_id: 3, txn_date: '2004-06-30 00:00:00', account_id: 3, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2004-06-30 00:00:00'},
    {txn_id: 4, txn_date: '2001-03-12 00:00:00', account_id: 4, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2001-03-12 00:00:00'},
    {txn_id: 5, txn_date: '2001-03-12 00:00:00', account_id: 5, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2001-03-12 00:00:00'},
    {txn_id: 6, txn_date: '2002-11-23 00:00:00', account_id: 7, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2002-11-23 00:00:00'},
    {txn_id: 7, txn_date: '2002-12-15 00:00:00', account_id: 8, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2002-12-15 00:00:00'},
    {txn_id: 8, txn_date: '2003-09-12 00:00:00', account_id: 10, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2003-09-12 00:00:00'},
    {txn_id: 9, txn_date: '2000-01-15 00:00:00', account_id: 11, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2000-01-15 00:00:00'},
    {txn_id: 10, txn_date: '2004-09-30 00:00:00', account_id: 12, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2004-09-30 00:00:00'},
    {txn_id: 11, txn_date: '2004-01-27 00:00:00', account_id: 13, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2004-01-27 00:00:00'},
    {txn_id: 12, txn_date: '2002-08-24 00:00:00', account_id: 14, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2002-08-24 00:00:00'},
    {txn_id: 13, txn_date: '2004-12-28 00:00:00', account_id: 15, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2004-12-28 00:00:00'},
    {txn_id: 14, txn_date: '2004-01-12 00:00:00', account_id: 17, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2004-01-12 00:00:00'},
    {txn_id: 15, txn_date: '2001-05-23 00:00:00', account_id: 18, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2001-05-23 00:00:00'},
    {txn_id: 16, txn_date: '2001-05-23 00:00:00', account_id: 19, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2001-05-23 00:00:00'},
    {txn_id: 17, txn_date: '2003-07-30 00:00:00', account_id: 21, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2003-07-30 00:00:00'},
    {txn_id: 18, txn_date: '2004-10-28 00:00:00', account_id: 22, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2004-10-28 00:00:00'},
    {txn_id: 19, txn_date: '2004-06-30 00:00:00', account_id: 23, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2004-06-30 00:00:00'},
    {txn_id: 20, txn_date: '2002-09-30 00:00:00', account_id: 24, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2002-09-30 00:00:00'},
    {txn_id: 21, txn_date: '2003-07-30 00:00:00', account_id: 28, txn_type_cd: 'CDT', amount: 100.00, teller_emp_id: null, execution_branch_id: null, funds_avail_date: '2003-07-30 00:00:00'}
  ]
};