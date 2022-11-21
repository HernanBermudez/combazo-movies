import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Grid container spacing={2} className='flex sm:p-20 md:p-40 text-xs'>
			<Grid item xs={12} className='justify-evenly'>
				<Facebook className='ml-4 mr-4' />
				<Instagram className='mr-4' />
				<Twitter className='mr-4' />
				<YouTube className='mr-4' />
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Audio descriptivo</Link>
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Centro de ayuda</Link>
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Términos de uso</Link>
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Relaciones con inversionistas</Link>
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Tarjetas de regalo</Link>
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Empleo</Link>
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Prensa</Link>
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Privacidad</Link>
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Avisos legales</Link>
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Preferencias de cookies</Link>
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Información corporativa</Link>
			</Grid>
			<Grid item xs={6} sm={3} className='flex pr-10 opacity-40'>
				<Link to='/'>Contáctanos</Link>
			</Grid>
			<Grid item xs={12} className='flex p-2'>
				<Link
					to='/'
					className='opacity-40 p-2 border-l-white border hover:opacity-100 hover:border-gray-500'
				>
					Código de servicio
				</Link>
			</Grid>
			<Grid item xs={12}>
				<div className='flex opacity-40'>© 1997-2022 Netflix, Inc.</div>
			</Grid>
		</Grid>
	);
};

export default Footer;

