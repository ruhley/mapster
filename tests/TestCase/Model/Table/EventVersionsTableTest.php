<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\EventVersionsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\EventVersionsTable Test Case
 */
class EventVersionsTableTest extends TestCase
{

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'EventVersions' => 'app.event_versions',
        'Chapters' => 'app.chapters',
        'Media' => 'app.media',
        'Universes' => 'app.universes',
        'CharacterChangeVersions' => 'app.character_change_versions',
        'Characters' => 'app.characters',
        'CharacterChanges' => 'app.character_changes',
        'Events' => 'app.events',
        'EventPlaces' => 'app.event_places',
        'Places' => 'app.places',
        'PlaceTypes' => 'app.place_types',
        'PlaceChangeVersions' => 'app.place_change_versions',
        'Maps' => 'app.maps',
        'MapChangeVersions' => 'app.map_change_versions',
        'MapChanges' => 'app.map_changes',
        'MapVersions' => 'app.map_versions',
        'PlaceChanges' => 'app.place_changes',
        'PlaceVersions' => 'app.place_versions',
        'PlaceTypeVersions' => 'app.place_type_versions',
        'CharacterVersions' => 'app.character_versions',
        'MediaVersions' => 'app.media_versions',
        'UniverseVersions' => 'app.universe_versions',
        'ChapterVersions' => 'app.chapter_versions'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('EventVersions') ? [] : ['className' => 'App\Model\Table\EventVersionsTable'];
        $this->EventVersions = TableRegistry::get('EventVersions', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->EventVersions);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
