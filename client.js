// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
КРАСНЫЕ = GameMode.Parameters.GetBool("RedTeam");
СИНИЕ = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
	Teams.Add("КРАСНЫЕ", "Teams/Red", { r: 1 });
	Teams.Get("КРАСНЫЕ").Spawns.SpawnPointsGroups.Add(2);
}
if (blue || !red && !blue) {
	Teams.Add("СИНИЕ", "Teams/Blue", { b: 1 });
	Teams.Get("СИНИЕ").Spawns.SpawnPointsGroups.Add(1);
	if(GameMode.Parameters.GetBool("BlueHasNothing")){
		var inventory = Inventory.GetContext();
		Teams.Get("Blue").Inventory.Main.Value = true;
		Teams.Get("Blue").Inventory.Secondary.Value = true;
		Teams.Get("Blue").Inventory.Melee.Value = true;
		Teams.Get("Blue").Inventory.Explosive.Value = true;
		Teams.Get("Blue").Inventory.Build.Value = true;
	}
}

// ��������� ���� � ������� �� �������
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// ����� �� ����� � �������
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// ������ ���������
Ui.getContext().Hint.Value = "Hint/BuildBase";

// ������������ ���������
var inventory = Inventory.GetContext();
inventory.Main.Value = true;
inventory.Secondary.Value = true;
inventory.Melee.Value = true;
inventory.Explosive.Value = true;
inventory.Build.Value = true;
inventory.BuildInfinity.Value = true;

// ��������� ��� ������ �����
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// ������������ �����
Spawns.GetContext().RespawnTime.Value = 0;
// ��������� ������� ��
var inventory = lnventory.GetContext();
inventory.Secondarylnfinity.Value = true;
inventory.BuildInfinitylnfinity.Value = true;
inventory.Explosivelnfinity.Value = true;
inventory.Buildlnfinity.Value = true;
inventory.Mainlnfinity.Value = true;
inventory.Meleelnfinity.Value = true;



