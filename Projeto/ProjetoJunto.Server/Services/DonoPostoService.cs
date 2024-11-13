﻿using NHibernate;
using ProjetoJunto.Server.Entidades;

namespace ProjetoJunto.Server.Services
{
    public class DonoPostoService
    {
        private readonly ISessionFactory sessionFactory;
        private readonly TokenService tokenService;
        public DonoPostoService(ISessionFactory sessionFactory, TokenService tokenService)
        {
            this.sessionFactory = sessionFactory;
            this.tokenService = tokenService;
        }
        public string HashSenha(string senha)
        {
            return BCrypt.Net.BCrypt.HashPassword(senha);
        }
        public bool CadastrarDonoPosto(DonoPosto donoposto)
        {
            using var session = sessionFactory.OpenSession();
            using var transaction = session.BeginTransaction();
            donoposto.SenhaHasheada = HashSenha(donoposto.SenhaHasheada);
            session.Save(donoposto);
            transaction.Commit();
            return true;
        }
        public bool ValidarCredenciais(string email, string senha)
        {
            using var session = sessionFactory.OpenSession();
            var donoPosto = session.Query<DonoPosto>().FirstOrDefault(d => d.Email == email);
            if (donoPosto == null)
            {
                return false;
            }
            return BCrypt.Net.BCrypt.Verify(senha, donoPosto.SenhaHasheada);
        }
        public bool ValidarPosto(string cnpj, string endereco)
        {
            using var session = sessionFactory.OpenSession();
            var posto = session.Query<Posto>().FirstOrDefault(p => p.CNPJ == cnpj || p.Endereco == endereco);
            if (posto == null)
            {
                return true;
            }
            return false;
        }
        public bool CriarPosto(int id, Posto posto)
        {
            using var session = sessionFactory.OpenSession();
            using var transaction = session.BeginTransaction();
            var donoPosto = session.Get<DonoPosto>(id);
            if (donoPosto == null)
            {
                return false;
            }
            posto.DonoPosto = donoPosto;
            posto.DonoPostoId = id;
            donoPosto.Postos.Add(posto);
            session.Save(posto);
            session.Update(donoPosto);
            transaction.Commit();
            return true;
        }
        public List<Posto> MostrarPostos(int id)
        {
            using var session = sessionFactory.OpenSession();
            var donoPosto = session.Get<DonoPosto>(id);
            if (donoPosto == null)
            {
                throw new Exception("Dono do Posto não encontrado");
            }
            return donoPosto.Postos.ToList();
        }
        public bool EditarDonoPosto(int id, DonoPosto donoposto)
        {
            using var session = sessionFactory.OpenSession();
            using var transaction = session.BeginTransaction();
            var donoPosto = session.Get<DonoPosto>(id);
            if (donoPosto == null)
            {
                return false;
            }
            donoPosto.Nome = donoposto.Nome;
            donoPosto.CPF = donoposto.CPF;
            donoPosto.Email = donoposto.Email;
            donoPosto.SenhaHasheada = HashSenha(donoposto.SenhaHasheada);
            donoPosto.Telefone = donoposto.Telefone;
            session.Update(donoPosto);
            transaction.Commit();
            return true;
        }
        public DonoPosto MostrarInformacoes(int id)
        {
            using var session = sessionFactory.OpenSession();
            var donoPosto = session.Get<DonoPosto>(id);
            if (donoPosto == null)
            {
                throw new Exception("Dono do Posto não encontrado");
            }
            return donoPosto;
        }
        public DonoPosto Remover(int id)
        {
            using var session = sessionFactory.OpenSession();
            using var transaction = session.BeginTransaction();
            var donoPosto = session.QueryOver<DonoPosto>()
                           .Where(d => d.DonoPostoId == id)
                           .Fetch(d => d.Postos).Eager
                           .SingleOrDefault();
            if (donoPosto == null)
            {
                throw new Exception("Dono do Posto não encontrado");
            }
            session.Delete(donoPosto);
            transaction.Commit();
            return donoPosto;
        }
    }
}
