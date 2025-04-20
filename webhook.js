
export async function sendToDiscord({ username, branch, time, lat, lng }) {
  const webhookUrl = "https://discord.com/api/webhooks/1357635862552252508/GaDQ9oWtD48TMc35yrdtxRuuQhOHB8xcNf4wxAsE2lUdYaClB_k_FFG8YI_6Ms4fCZRO";

  const embed = {
    title: "✅ Clock-in สำเร็จ!",
    color: 0x00ff00,
    fields: [
      { name: "👤 พนักงาน", value: username, inline: true },
      { name: "📍 สาขา", value: branch, inline: true },
      { name: "🕒 เวลา", value: time, inline: true },
      { name: "🌐 พิกัด", value: `${lat.toFixed(5)}, ${lng.toFixed(5)}`, inline: false }
    ],
    timestamp: new Date().toISOString()
  };

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ embeds: [embed] })
  });
}
