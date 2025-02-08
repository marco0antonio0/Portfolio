export const fetchData = async (setStoriesData: any) => {
    const url = "https://cms-portfolio.dirrocha.com/api/projeto";

    try {
        const response = await fetch(url);
        const json = await response.json();

        const data = json.data.map((response: any) => {
            const d: any = response.formattedData;

            // Verifique se d.data existe e é uma string válida antes de prosseguir
            if (!d?.data || typeof d.data !== "string") {
                console.error("Data inválida ou não definida:", d?.data);
                return {
                    title: d?.titulo ?? "",
                    description: d?.breve_descricao ?? "",
                    link: d?.link ?? "",
                    image: d?.image ?? "",
                    author: "marco0antonio0",
                    date: "",
                };
            }

            const [year, month, day] = d.data.split("-").map(Number);
            const date = new Date(Date.UTC(year, month - 1, day));

            const meses = [
                "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
            ];

            let formattedDate: string = "";
            if (!isNaN(date.getTime())) {
                formattedDate = `${meses[date.getMonth()]} ${date.getFullYear()}`;
            } else {
                console.error("Data inválida após conversão:", d.data);
            }

            return {
                title: d.titulo,
                description: d.breve_descricao,
                link: d.link,
                image: d.image,
                author: "marco0antonio0",
                date: formattedDate
            };
        });

        // Adiciona um delay de pelo menos 5 segundos antes de definir os dados no estado
        setTimeout(() => {
            setStoriesData(data);
        }, 1000);
    } catch (error) {
        console.error("Erro ao buscar os projetos:", error);
    }
};
