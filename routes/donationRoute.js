import express from 'express';
import {
    createDonation,
    getDonations,
    getDonationById,
    updateDonation,
    deleteDonation,
    checkout,
    paymentVerification
} from '../controllers/donationController.js';

const router = express.Router();


// Create a donation
router.post('/checkout', checkout);

router.post('/payment-verification', paymentVerification);



// Create a donation
router.post('/create-donation', createDonation);

// Get all donations
router.get('/all-donation', getDonations);

// Get a donation by ID
router.get('/:id', getDonationById);

// Update a donation
router.put('/update-donation/:id', updateDonation);

// Delete a donation
router.delete('/delete-donation/:id', deleteDonation);

export default router;
