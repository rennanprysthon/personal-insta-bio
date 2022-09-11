import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from '~/styles/index.css'

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Insta bio clone, but coole",
  viewport: "width=device-width,initial-scale=1",
  author: "Rennan Prysthon",
  description: "Sample InstaBio clone app",
});

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
]
export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
