const form = document.getElementById('skinForm');
const solutionText = document.getElementById('solutionText');
const productList = document.getElementById('productList');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const problem = document.getElementById('skinProblem').value;

  // Simulated AI response logic
  const response = getSkincareAdvice(problem);

  solutionText.innerText = response.solution;
  productList.innerHTML = '';
  response.products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = product;
    productList.appendChild(li);
  });

  resultsDiv.classList.remove('hidden');
});

function getSkincareAdvice(problem) {
  const problemLower = problem.toLowerCase();
  if (problemLower.includes('acne')) {
    return {
      solution: 'Use gentle cleansers with salicylic acid and non-comedogenic moisturizers.',
      products: ['CeraVe Foaming Cleanser', 'The Ordinary Niacinamide 10%', 'La Roche-Posay Effaclar Duo']
    };
  } else if (problemLower.includes('dry')) {
    return {
      solution: 'Hydrate your skin using hyaluronic acid and ceramide-rich creams.',
      products: ['Neutrogena Hydro Boost', 'CeraVe Moisturizing Cream', 'The Ordinary Hyaluronic Acid 2%']
    };
  } else if (problemLower.includes('oily')) {
    return {
      solution: 'Use oil-control products and exfoliate gently twice a week.',
      products: ['Paula’s Choice BHA', 'Cetaphil Oil Control Moisturizer', 'COSRX AHA/BHA Toner']
    };
  } else {
    return {
      solution: 'Consider consulting a dermatologist for a detailed analysis.',
      products: ['Generic Hydrating Cleanser', 'Basic SPF 50 Sunscreen']
    };
  }
}
