const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')

// Sample data
const leaves = ['satoshi@nakamoto.com', 'vitalik@buterin.ca', 'gavin@wood.de', ''].map(x => SHA256(x))

// Initialize the Merkle Tree
const tree = new MerkleTree(leaves, SHA256);

// Log the tree
console.log('Merkle tree:\n', tree.toString());

// Get the Merkle proof for 'vitalik@buterin.ca'
const leaf = SHA256('vitalik@buterin.ca');
const proof = tree.getHexProof(leaf);

// Output the proof
console.log('Merkle Proof for "vitalik@buterin.ca":', proof);

// Get the root of the tree
const root = tree.getRoot().toString('hex');

// Verify the proof for 'vitalik@buterin.ca'
console.log(tree.verify(proof, leaf, root)) // true