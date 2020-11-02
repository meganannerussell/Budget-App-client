export const createIncome = async ({ charge, amount }) => {
  const response = await fetch(`${apiBaseUrl}/incomes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ charge, amount }),
  });

  return response;
};

export const createExpense = async ({ charge, amount }) => {
  const response = await fetch(`${apiBaseUrl}/expenses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ charge, amount }),
  });

  return response;
};

export const getIncomes = async () => {
  const response = await fetch(`${apiBaseUrl}/incomes`);
  const incomes = await response.json();

  return incomes;
};

export const getExpenses = async () => {
    const response = await fetch(`${apiBaseUrl}/expenses`);
    const expenses = await response.json();
  
    return expenses;
  };

  export const deleteIncome = async(id)=>{
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(`${apiBaseUrl}/incomes/${id}`, {
          method: "DELETE"
      });
    //   console.log(response, 'was deleted')
    //   return response
  }

  export const deleteExpense = async(id)=>{
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(`${apiBaseUrl}/expenses/${id}`, {
        method: "DELETE"
    });
  //   console.log(response, 'was deleted')
  //   return response
}